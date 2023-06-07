import { createAsyncThunk } from "@reduxjs/toolkit";

import { abcpApi, instanceAuth } from "@/utils/axios";

/* Получение данных API */
export const getFavoriteAssets = createAsyncThunk(
  "items",
  async (data: string, { rejectWithValue }) => {
    try {
      const assets = await abcpApi.get(`${data}`);
      const singleAsset = await abcpApi.get(`{data}`);

      return {
        name: data,
        price_chart_data: assets.data.prices.slice(
          assets.data.prices.length - 60,
          assets.data.prices.length - 1
        ),
        singleAsset: singleAsset.data,
      };
    } catch (e: any) {
      if (e.response && e.response.data.message) {
        return rejectWithValue(e.response.data.message);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);

/* Получение данных API в таблицу TopPrice */
export const getTopPriceData = createAsyncThunk(
  "coins/markets/topPrice",
  async (_, { rejectWithValue }) => {
    try {
      const assets = await abcpApi.get(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      return assets.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createWatchListRecord = createAsyncThunk(
  "products/create",
  (data: { name: string; assetId: string }, { rejectWithValue }) => {
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
