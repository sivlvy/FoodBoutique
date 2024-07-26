// import React from "react";

import { useEffect, useState } from "react";
import { getCategories } from "../../../api/api-products.ts";
import Select from "react-select";

export interface FilterSelectProps {}

export default function FilterSelect({}: FilterSelectProps) {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const func = async () => {
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
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    func();
  }, []);

  return (
    <div>
      <Select
        className="react-select-container"
        unstyled
        classNamePrefix="react-select"
        options={categories}
      />
    </div>
  );
}
