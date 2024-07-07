import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.loggedUser.push(action.payload);
    },
    removeUser: (state) => {
      state.loggedUser = [];
    },
    updateUser: (state, action) => {
      const user = state.loggedUser.find(
        (user) => user.id === action.payload.id
      );
      if (user) {
        user.vectorstore = action.payload.vectorstore;
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;