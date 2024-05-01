import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  tgLink: string;
  phoneNum: string;
  group: string;
  category: string;
  id: string;
}

export type UserBase = Omit<User, "tgLink" | "phoneNum" | "group" | "category">;

export type UserData = Omit<User, "firstName" | "lastName" | "email" | "id">;

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
  tgLink: "",
  phoneNum: "",
  group: "",
  category: "",
  id: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state = { ...action.payload };
    },
    setBaseInfo(state, { payload }: PayloadAction<UserBase>) {
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.id = payload.id;
    },
    setUserInfo(state, { payload }: PayloadAction<UserData>) {
      state.category = payload.category;
      state.group = payload.group;
      state.phoneNum = payload.phoneNum;
      state.tgLink = payload.tgLink;
    },
  },
});

export const { setUser, setBaseInfo, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
