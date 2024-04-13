import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  email: string;
  password: string;
}
const initialState: InitialState = {
  email: "",
  password: "",
};
const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    createAccount(stete, action: InitialState) {
        
    },
  },
});
export default slice.reducer;
