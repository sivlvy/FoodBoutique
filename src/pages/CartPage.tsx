// import React from "react";

import CartOrder from "../components/CartOrder/CartOrder.tsx";
import CartProductsList from "../components/CartProductsList/CartProductsList.tsx";

import scss from "./cart-page.module.scss";

export interface CartPageProps {}

export default function CartPage() {
  return (
    <>
      <h2>Cart</h2>
      <div className={scss.list}>
        <CartProductsList />
        <CartOrder />
      </div>
    </>
  );
}
