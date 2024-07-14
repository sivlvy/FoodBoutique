// import React from "react";
import scss from "./products-discount.module.scss";
import { Product } from "../../../api/api-products.ts";
import ProductsDiscountItem from "./ProductsDiscountItem/ProductsDiscountItem.tsx";

export interface ProductsDiscountProps {
  items: Product[];
}

export default function ProductsDiscount({ items }: ProductsDiscountProps) {
  const filteredItems = items.slice(0, 2);
  return (
    <div className={scss.wrapper}>
      <h2 className={scss.title}>Discount products</h2>
      <ul className={scss.list}>
        {filteredItems.map(({ img, name, price, _id }: Product) => (
          <ProductsDiscountItem key={_id} img={img} name={name} price={price} />
        ))}
      </ul>
    </div>
  );
}
