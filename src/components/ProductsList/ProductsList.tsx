// import React from "react";
import PopularProducts from "../PopularProducts/PopularProducts.tsx";
import DiscountProducts from "../DiscountProducts/DiscountProducts.tsx";

export interface ProductsListProps {}

export default function ProductsList({}: ProductsListProps) {
  return (
    <>
      <div>ProductsList</div>
      <PopularProducts />
      <DiscountProducts />
    </>
  );
}
