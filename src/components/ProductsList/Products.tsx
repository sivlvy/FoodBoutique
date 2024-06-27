// import React from "react";
import PopularProducts from "../PopularProducts/PopularProducts.tsx";
import DiscountProducts from "../DiscountProducts/DiscountProducts.tsx";
import ProductsList from "./ProductsList/ProductsList.tsx";
import scss from "./products.module.scss";

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
      <div className={scss.normalProducts}>
        <ProductsList
          products={products}
          isLoading={isLoading}
          isError={isError}
        />
        <div className={scss.notNormal_products}>
          <h2 className="font-medium text-[24px] leading-[1.16] text-customBlack">
            Popular products
          </h2>
          <PopularProducts
            products={products}
            isError={isError}
            isLoading={isLoading}
          />
          <DiscountProducts />
        </div>
      </div>
    </>
  );
}
