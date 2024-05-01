import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  chatId: string | null;
  user: Record<string, string>;
}
const initialState: IInitialState = {
  chatId: JSON.parse(localStorage.getItem("chatId")!) ?? null,
  user: JSON.parse(localStorage.getItem("select-user")!) ?? {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeChat(
      state,
      {
        payload,
      }: PayloadAction<{
        chatId: string;
        user: Record<string, string>;
      }>
    ) {
      state.chatId = payload.chatId;
      state.user = payload.user;
      localStorage.setItem("chatId", JSON.stringify(state.chatId));
      localStorage.setItem("select-user", JSON.stringify(state.user));
    },
  },
});

export const { changeChat } = chatSlice.actions;

export default chatSlice.reducer;
