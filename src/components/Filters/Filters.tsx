// import React from "react";

import FilterKeyword from "./FilterKeyword/FilterKeyword.tsx";
import FilterSelect from "./FilterSelect/FilterSelect.tsx";

export interface FiltersProps {}

export default function Filters({}: FiltersProps) {
  return (
    <div>
      <FilterKeyword />
      <FilterSelect />
    </div>
  );
}
