// import React from "react";

import Hero from "../components/Hero/Hero.tsx";
import ProductsPage from "./ProductsPage.tsx";

export interface HomePageProps {}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsPage />
    </>
  );
}
