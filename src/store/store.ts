import { configureStore } from "@reduxjs/toolkit";
import admin from "./slice/admin";
const store = configureStore({
  reducer: {
    admin,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
