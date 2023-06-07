/* Логика запроса к беку, чтобы получить список избранных ассетов у пользователя */
import { createAsyncThunk } from "@reduxjs/toolkit";

import { instanceAuth } from "@/utils/axios";

export const getProductsElements = createAsyncThunk(
  "products/get-elements",
  async (_, { rejectWithValue }) => {
    try {
      const userAssets = await instanceAuth.get("products/get-elements");
      return userAssets.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
