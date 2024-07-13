// import React from "react";

import { Product } from "../../../api/api-products.ts";

import scss from "./products-popular.module.scss";
import ProductsPopularItem from "./ProductsPopularItem/ProductsPopularItem.tsx";

export interface ProductsPopularProps {
  items: Product[];
}

export default function ProductsPopular({ items }: ProductsPopularProps) {
  console.log(items);
  return (
    <>
      <h2 className="font-medium text-[24px] leading-[1.67] text-customBlack pb-[20px]">
        Popular products
      </h2>
      <div className={scss.wrapper}>
        <ul className={scss.list}>
          {items.map(
            ({ name, img, category, size, popularity, _id }: Product) => (
              <ProductsPopularItem
                key={_id}
                name={name}
                img={img}
                category={category}
                size={size}
                popularity={popularity}
              />
            ),
          )}
        </ul>
      </div>
    </>
  );
}
