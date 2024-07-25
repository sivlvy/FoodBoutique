// import React from "react";

import { useForm } from "react-hook-form";

import scss from "./filter-keyword.module.scss";

import { useAppDispatch } from "../../../hooks/hooks.ts";
import {
  filterSearch,
  resetFilter,
} from "../../../redux/filters/filter-slice.ts";

export interface FilterKeywordProps {}

interface SearchProps {
  search: string;
}

export default function FilterKeyword({}: FilterKeywordProps) {
  const { register, handleSubmit } = useForm<SearchProps>();

  const dispatch = useAppDispatch();

  const onSubmit = ({ search }: SearchProps) => {
    console.log(search);
    if (search) {
      dispatch(filterSearch(search));
    }
    if (!search) {
      dispatch(resetFilter);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
      <input
        {...register("search")}
        type="text"
        placeholder="Search for anything"
      />
      <button type="submit">Search</button>
    </form>
  );
}
