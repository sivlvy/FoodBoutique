// import React from "react";
import Filters from "../components/Filters/Filters.tsx";
import Products from "../components/ProductsList/Products.tsx";

export interface ProductsPageProps {}

export default function ProductsPage({}: ProductsPageProps) {
  return (
    <>
      <Filters />
      <Products />
    </>
  );
}
