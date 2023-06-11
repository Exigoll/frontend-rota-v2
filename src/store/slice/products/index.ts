import { createSlice } from "@reduxjs/toolkit";

import { getProductsCart } from "@/store/thunks/products";

const initialState: any = {
  products: [],
  cartProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsCart.fulfilled, (state, action) => {
      state.cartProducts.push(action.payload);
    });
  },
});

export default productsSlice.reducer;
