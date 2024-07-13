// import React from "react";

import { Product } from "../../../api/api-products.ts";
import ProductsListItem from "./ProductsListItem/ProductsListItem.tsx";
import scss from "./products-list.module.scss";

export interface ProductsListProps {
  items: Product[];
}

export default function ProductsList({ items }: ProductsListProps) {
  return (
    <div className="flex flex-col">
      <ul className={scss.list}>
        {items.map(
          ({
            category,
            img,
            is10PercentOff,
            name,
            popularity,
            price,
            size,
            _id,
          }: Product) => (
            <ProductsListItem
              category={category}
              img={img}
              is10PercentOff={is10PercentOff}
              key={_id}
              name={name}
              popularity={popularity}
              price={price}
              size={size}
            />
          ),
        )}
      </ul>
    </div>
  );
}
