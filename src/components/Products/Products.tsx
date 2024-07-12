// import React from "react";

import ProductsList from "./ProductsList/ProductsList.tsx";
import ProductsPopular from "./ProductsPopular/ProductsPopular.tsx";
import ProductsDiscount from "./ProductsDiscount/ProductsDiscount.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { useEffect } from "react";
import {
  fetchPopularProducts,
  fetchProducts,
} from "../../redux/products/products-operations.ts";

export interface ProductsProps {}

export default function Products({}: ProductsProps) {
  const dispatch = useAppDispatch();

  const { products, page, popularProducts } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts(page));
    dispatch(fetchPopularProducts());
  }, []);
  return (
    <div>
      <ProductsList items={products} />
      <ProductsPopular items={popularProducts} />
      <ProductsDiscount />
    </div>
  );
}
