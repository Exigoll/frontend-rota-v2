import { createSlice } from "@reduxjs/toolkit";

import { getProductsElements } from "@/store/thunks/products";

const initialState: any = {
  assets: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsElements.fulfilled, (state, action) => {
      state.assets = action.payload;
    });
  },
});

export default productsSlice.reducer;
