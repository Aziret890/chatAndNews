import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  tgLink: string;
  phoneNum: string;
  group: string;
  category: string;
}

export type UserBase = Omit<User, "tgLink" | "phoneNum" | "group" | "category">;

export type UserData = Omit<User, "firstName" | "lastName" | "email">;

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
  tgLink: "",
  phoneNum: "",
  group: "",
  category: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state = action.payload;
    },
    setBaseInfo(state, action: PayloadAction<UserBase | UserData>) {
      state = { ...state, ...action.payload };
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhoneNum(state, action: PayloadAction<string>) {
      state.phoneNum = action.payload;
    },
  },
});

export const { setUser, setBaseInfo } = userSlice.actions;

export default userSlice.reducer;
