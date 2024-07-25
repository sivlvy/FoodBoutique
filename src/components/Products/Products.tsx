// import React from "react";

import ProductsList from "./ProductsList/ProductsList.tsx";
import ProductsPopular from "./ProductsPopular/ProductsPopular.tsx";
import ProductsDiscount from "./ProductsDiscount/ProductsDiscount.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { useEffect, useState } from "react";
import {
  fetchDiscountProducts,
  fetchPopularProducts,
  fetchProducts,
} from "../../redux/products/products-operations.ts";

import scss from "./products.module.scss";

export interface ProductsProps {}

export default function Products({}: ProductsProps) {
  const dispatch = useAppDispatch();

  const {
    products,
    popularProducts,
    discountProducts,
    isLoading,
    category,
    keyword,
  } = useAppSelector((state) => state.products);

  const [page, setPage] = useState<number>(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    dispatch(fetchProducts({ category, page, keyword }));
  }, [dispatch, page, category, keyword]);

  useEffect(() => {
    dispatch(fetchPopularProducts());
    dispatch(fetchDiscountProducts());
  }, [dispatch]);
  return (
    <div className={scss.list}>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <ProductsList
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          items={products}
        />
      )}
      <div className={scss.wrapper}>
        <ProductsPopular items={popularProducts} />
        <ProductsDiscount items={discountProducts} />
      </div>
    </div>
  );
}
