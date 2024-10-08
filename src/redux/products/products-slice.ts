import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { Product, ProductListResponse } from "../../api/api-products.ts";
import {
  fetchDiscountProducts,
  fetchPopularProducts,
  fetchProducts,
  getOrders,
  getProductById,
} from "./products-operations.ts";

export interface StateProps {
  products: Product[];
  cartProducts: Product[];
  popularProducts: Product[];
  discountProducts: Product[];
  product: Product | null;
  totalPages: number;
  page: number;
  isLoading: boolean;
  isError: null | string;
  limit: number;
}

const initialState: StateProps = {
  products: [],
  cartProducts: [],
  popularProducts: [],
  discountProducts: [],
  totalPages: 1,
  page: 1,
  product: null,
  isLoading: false,
  isError: null,
  limit: 9,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      state.cartProducts.push(payload);
    },
    deleteFromCart: (state, { payload }: PayloadAction<string>) => {
      console.log(payload);
      state.cartProducts = state.cartProducts.filter(
        ({ _id }) => _id !== payload,
      );
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
          state.totalPages = payload.totalPages;
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
      )
      .addCase(fetchDiscountProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchDiscountProducts.fulfilled,
        (state, { payload }: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.discountProducts = payload;
        },
      )
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProductById.fulfilled,
        (state, { payload }: PayloadAction<Product>) => {
          state.isLoading = false;
          state.product = payload;
        },
      )
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getOrders.rejected, (state, { payload }): any => {
        state.isError = payload as string | null;
      });
  },
});

export const { addToCart, deleteFromCart, resetCart } = productsSlice.actions;

export default productsSlice.reducer;
