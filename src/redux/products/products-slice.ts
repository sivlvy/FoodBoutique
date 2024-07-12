import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { Product, ProductListResponse } from "../../api/api-products.ts";
import { fetchPopularProducts, fetchProducts } from "./products-operations.ts";

export interface StateProps {
  products: Product[];
  cartProducts: Product[];
  popularProducts: Product[];
  discountProducts: Product[];
  page: number;
  isLoading: boolean;
  isError: null | string;
}

const initialState: StateProps = {
  products: [],
  cartProducts: [],
  popularProducts: [],
  discountProducts: [],
  page: 1,
  isLoading: false,
  isError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      state.cartProducts.push(payload);
    },
    deleteFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cartProducts.filter(({ _id }) => _id !== payload);
    },
    resetCart: (state) => {
      state.cartProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, { payload }: PayloadAction<ProductListResponse>) => {
          state.isLoading = false;
          state.products = payload.results;
          state.page = payload.page;
        },
      )
      .addCase(
        fetchProducts.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.isError = payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchPopularProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPopularProducts.fulfilled,
        (state, { payload }: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.popularProducts = payload;
        },
      )
      .addCase(
        fetchPopularProducts.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = payload;
        },
      );
  },
});

export default productsSlice.reducer;
