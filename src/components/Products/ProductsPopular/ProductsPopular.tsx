// import React from "react";

import { Product } from "../../../api/api-products.ts";

import scss from "./products-popular.module.scss";
import ProductsPopularItem from "./ProductsPopularItem/ProductsPopularItem.tsx";

export interface ProductsPopularProps {
  items: Product[];
}

export default function ProductsPopular({ items }: ProductsPopularProps) {
  return (
    <div className="flex flex-col">
      <h2 className={scss.title}>Popular products</h2>
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
    </div>
  );
}
