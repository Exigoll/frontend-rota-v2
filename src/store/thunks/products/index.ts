import { createAsyncThunk } from "@reduxjs/toolkit";

import { abcpApi, instanceAuth } from "@/utils/axios";

/* export const createProductsRecord = createAsyncThunk(
  "products/create",
  (
    data: { brand: string; descr: string; article: string },
    { rejectWithValue }
  ) => {
    try {
      return instanceAuth.post("products/create", data);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
 */
/* Добавление товаров в избранное */
export const getProductsCart = createAsyncThunk(
  "products",
  async (data: unknown, { rejectWithValue }) => {
    try {
      const productsArticle = await abcpApi.get(`/products?number=${data}`);
      return {
        article: data,
        data: productsArticle.data[0],
        crosses: productsArticle.data[0].crosses,
      };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
