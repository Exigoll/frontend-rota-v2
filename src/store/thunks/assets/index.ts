import { createAsyncThunk } from "@reduxjs/toolkit";

import { coinGeckoApi } from "@/utils/axios";

export const getFavoriteAssets = createAsyncThunk(
  "coin/markets",
  async (data: unknown, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi(
        `/coins/markets?vs_current=usd?ids=${data}`
      );
      console.log(assets.data);
    } catch (error) {}
  }
);
