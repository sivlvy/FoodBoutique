// import React from "react";

import { useForm } from "react-hook-form";

import scss from "./filter-keyword.module.scss";

// import { useAppDispatch } from "../../../hooks/hooks.ts";

export interface FilterKeywordProps {}

interface SearchProps {
  search: string;
}

export default function FilterKeyword({}: FilterKeywordProps) {
  const { register, handleSubmit } = useForm<SearchProps>();

  // const dispatch = useAppDispatch();

  const onSubmit = ({ search }: SearchProps) => {
    console.log(search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
      <input {...register("search")} type="text" />
    </form>
  );
}
