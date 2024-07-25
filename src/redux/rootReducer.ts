import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from "./products/products-slice.ts";

import filterReducer from "./filters/filter-slice.ts";

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filterReducer,
});

export default rootReducer;
