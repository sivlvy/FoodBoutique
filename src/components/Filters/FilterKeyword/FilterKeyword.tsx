// import React from "react";

import { useForm } from "react-hook-form";

import scss from "./filter-keyword.module.scss";

import icons from "../../../assets/icons.svg";

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
  const { register, handleSubmit, reset } = useForm<SearchProps>();

  const dispatch = useAppDispatch();

  const onSubmit = ({ search }: SearchProps) => {
    if (search) {
      dispatch(filterSearch(search));
    }
    if (!search) {
      dispatch(resetFilter);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
      <input
        {...register("search")}
        type="text"
        className={scss.input}
        placeholder="Search for anything"
      />
      <button className={scss.button} type="submit">
        <svg className={scss.svg}>
          <use href={`${icons}#icon-search-icon`} />
        </svg>
      </button>
    </form>
  );
}
