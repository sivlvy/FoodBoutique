// import React from "react";

import { JSX } from "react";
import { useEffect, useState } from "react";
import { getCategories } from "../../../api/api-products.ts";
import Select, {
  components,
  DropdownIndicatorProps,
  SingleValue,
} from "react-select";

import icons from "../../../assets/icons.svg";
import scss from "./filter-select.module.scss";
import {
  filterCategory,
  resetFilter,
} from "../../../redux/filters/filter-slice.ts";
import { useAppDispatch } from "../../../hooks/hooks.ts";

export interface FilterSelectProps {}

interface CategoryOption {
  value: string;
  label: string;
}

export default function FilterSelect({}: FilterSelectProps) {
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<CategoryOption>>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        const formattedData = data.map((category: string) => ({
          value: category,
          label: category,
        }));
        setCategories([
          ...formattedData,
          { value: "Show All", label: "Show All" },
        ]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (newValue: SingleValue<CategoryOption>): void => {
    setSelectedOption(newValue);
    if (newValue?.value === "Show All") {
      dispatch(resetFilter());
    } else if (newValue) {
      dispatch(filterCategory(newValue.value));
    } else {
      setSelectedOption(null);
    }
  };

  const CustomDropdownIndicator = (
    props: DropdownIndicatorProps<CategoryOption, false>,
  ): JSX.Element => {
    return (
      <components.DropdownIndicator {...props}>
        <svg className={scss.svg}>
          <use href={`${icons}#icon-dropdown`} />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        isSearchable={false}
        options={categories}
        onChange={handleChange}
        value={selectedOption}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
    </div>
  );
}
