// import React from "react";
import Filters from "../components/Filters/Filters.tsx";
import ProductsList from "../components/ProductsList/ProductsList.tsx";

export interface ProductsPageProps {}

export default function ProductsPage({}: ProductsPageProps) {
  return (
    <>
      <Filters />
      <ProductsList />
    </>
  );
}
