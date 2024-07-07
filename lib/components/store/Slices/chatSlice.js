import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatHistory: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.chatHistory.push(action.payload);
    },
    updateMessage: (state, action) => {
      const { index, newContent } = action.payload;
      state.chatHistory[index].content[0].desc = newContent;
    },
    clearHistory: (state) => {
      state.chatHistory = [];
    },
    clearSingleMessage: (state, action) => {
      state.chatHistory.splice(action.payload, 1);
    },
  },
});

export const { addMessage, updateMessage, clearHistory, clearSingleMessage } = chatSlice.actions;

export default chatSlice.reducer;
