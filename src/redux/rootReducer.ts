import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from './products/products-slice.ts';

const rootReducer = combineReducers({
  products: productsReducer,
})

export default rootReducer;