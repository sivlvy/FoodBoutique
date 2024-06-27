// import React from "react";

import { Product } from "../../../zustand/store.tsx";
import ProductItem from "./ProductItem/ProductItem.tsx";
import scss from "./products-list.module.scss";
import Pagination from "../../Pagination/Pagination.tsx";

export interface ProductsListProps {
  products: Product[];
  isLoading: boolean;
  isError: string | null;
}

export default function ProductsList({
  products,
  isError,
  isLoading,
}: ProductsListProps) {
  return (
    <div className="flex flex-col">
      <ul className={scss.list}>
        {products.map(
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
            <ProductItem
              category={category}
              img={img}
              is10PercentOff={is10PercentOff}
              key={_id}
              name={name}
              popularity={popularity}
              price={price}
              size={size}
              isLoading={isLoading}
              isError={isError}
            />
          ),
        )}
      </ul>
      <Pagination />
    </div>
  );
}
