// import React from "react";
import PopularProducts from "../PopularProducts/PopularProducts.tsx";
import DiscountProducts from "../DiscountProducts/DiscountProducts.tsx";
import ProductsList from "./ProductsList/ProductsList.tsx";

import useProductStore from "../../zustand/store.tsx";

import { useEffect } from "react";

import Pagination from "../Pagination/Pagination.tsx";

export interface ProductsListProps {}

export default function Products({}: ProductsListProps) {
  const {
    products,
    fetchProducts,
    currentPage,
    totalPages,
    isError,
    isLoading,
  } = useProductStore();
  console.log(products);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, fetchProducts]);
  return (
    <>
      <ProductsList
        products={products}
        isLoading={isLoading}
        isError={isError}
      />
      <PopularProducts />
      <DiscountProducts />
      <Pagination />
    </>
  );
}
