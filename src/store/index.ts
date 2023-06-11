import { configureStore } from "@reduxjs/toolkit";

import authSlice from "@/store/slice/auth";
import productsSlice from "@/store/slice/products";

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
