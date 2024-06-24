// import React from "react";
import FilterWord from "./FilterWord/FilterWord.tsx";
import FilterCategory from "./FilterCategory/FilterCategory.tsx";
import FilterSelect from "./FilterSelect/FilterSelect.tsx";

export interface FiltersProps {}

export default function Filters({}: FiltersProps) {
  return (
    <div>
      <FilterWord />
      <FilterCategory />
      <FilterSelect />
    </div>
  );
}
