import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParamsProps } from "../../api/api-products.ts";

const initialState: ParamsProps = {
  keyword: null,
  category: null,
  page: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterSearch: (state, { payload }: PayloadAction<string>) => {
      state.keyword = payload;
    },
    filterCategory: (state, { payload }: PayloadAction<string>) => {
      state.category = payload;
    },
    resetFilter: (state) => {
      state.keyword = null;
      state.category = null;
    },
  },
});

export const { filterSearch, filterCategory, resetFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
