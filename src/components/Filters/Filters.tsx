// import React from "react";

import FilterKeyword from "./FilterKeyword/FilterKeyword.tsx";
import FilterSelect from "./FilterSelect/FilterSelect.tsx";
import Container from "../Container/Container.tsx";

export interface FiltersProps {}

export default function Filters({}: FiltersProps) {
  return (
    <Container>
      <h3 className="font-normal text-[14px] leading-[1.28] text-customBlack">
        Filters
      </h3>
      <FilterKeyword />
      <FilterSelect />
    </Container>
  );
}
