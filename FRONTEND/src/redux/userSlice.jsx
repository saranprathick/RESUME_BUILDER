import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "", // Change the initial state to null
  },
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: (state) => {
      state.user = null; // Set the user state back to null on logout
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
