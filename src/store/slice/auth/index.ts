import { createSlice } from "@reduxjs/toolkit";

import { IAuthState } from "@/common/types";

const initialState: IAuthState = {
  user: {
    id: null,
    email: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    legalForm: "",
    kindOfActivity: "",
    createdAt: "",
    updatedAt: "",
    watchlist: [
      {
        id: null,
        brand: "",
        descr: "",
        article: "",
        createdAt: "",
        updatedAt: "",
        user: null,
      },
    ],
  },
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
      console.log("Action", action.payload);
      console.log("User from state", state.user);
      console.log("Login", state.isLogged);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
