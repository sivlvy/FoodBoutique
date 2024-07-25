import * as products from "../../api/api-products.ts";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ParamsProps } from "../../api/api-products.ts";

export const fetchProducts = createAsyncThunk<any, ParamsProps, any>(
  "products/fetchProducts",
  async (params, { rejectWithValue }) => {
    try {
      const response = await products.getProducts(params);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const getProductById = createAsyncThunk<any, string, any>(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await products.getProductById(id);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const fetchDiscountProducts = createAsyncThunk<any, void, any>(
  "products/fetchDiscountProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await products.getDiscountProducts();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const fetchPopularProducts = createAsyncThunk<any, void, any>(
  "products/fetchPopularProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await products.getPopularProducts();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);
