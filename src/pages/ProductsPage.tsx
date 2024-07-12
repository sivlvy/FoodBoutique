// import React from "react";

import Products from "../components/Products/Products.tsx";
import Filters from "../components/Filters/Filters.tsx";

export interface ProductsPageProps {}

export default function ProductsPage({}: ProductsPageProps) {
  return (
    <>
      <Filters />
      <Products />
    </>
  );
}
