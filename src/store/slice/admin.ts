import { createSlice } from "@reduxjs/toolkit";
import { FieldType } from "../../components/password/Password";
export interface InitialState {
  email: string;
  password: string;
  passwordData?: FieldType;
}
const initialState: InitialState = {
  password: "",
  email: "",
  passwordData: {},
};
const adminslice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassowrd(state, action) {
      state.password = action.payload;
    },
    checkPassword(state, action) {
      state.passwordData = action.payload;
    },
  },
});
export default adminslice.reducer;
export const { setEmail, setPassowrd, checkPassword } = adminslice.actions;
