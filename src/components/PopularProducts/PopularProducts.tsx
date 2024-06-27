// import React from "react";
import scss from "./popular-products.module.scss";

import { Product } from "../../zustand/store.tsx";
import PopularProductsItem from "./PopularProductsItem/PopularProductsItem.tsx";

export interface PopularProductsProps {
  products: Product[];
  isError: string | null;
  isLoading: boolean;
}

export default function PopularProducts({
  products,
  isError,
  isLoading,
}: PopularProductsProps) {
  return (
    <div className={scss.wrapper}>
      <ul className={scss.list}>
        {products.map(
          ({ name, img, category, size, popularity, _id }: Product) => (
            <PopularProductsItem
              key={_id}
              name={name}
              img={img}
              category={category}
              size={size}
              popularity={popularity}
              isLoading={isLoading}
              isError={isError}
            />
          ),
        )}
      </ul>
    </div>
  );
}
