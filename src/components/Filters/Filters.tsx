// import React from "react";

import FilterKeyword from "./FilterKeyword/FilterKeyword.tsx";
import FilterSelect from "./FilterSelect/FilterSelect.tsx";

export interface FiltersProps {}

export default function Filters({}: FiltersProps) {
  return (
    <div>
      <h3 className="font-normal text-[14px] leading-[1.28] text-customBlack pb-[8px]">
        Filters:
      </h3>
      <FilterKeyword />
      <FilterSelect />
    </div>
  );
}
