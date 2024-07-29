// import React from "react";

import CartOrder from "../components/CartOrder/CartOrder.tsx";
import CartProductsList from "../components/CartProductsList/CartProductsList.tsx";

import scss from "./cart-page.module.scss";
import icons from "../assets/icons.svg";
import { useAppSelector } from "../hooks/hooks.ts";
import CartEmpty from "../components/CartEmpty/CartEmpty.tsx";

export interface CartPageProps {}

export default function CartPage() {
  const cartProducts = useAppSelector((state) => state.products.cartProducts);
  console.log(cartProducts);
  return (
    <div className={scss.wrapper}>
      <div className={scss.logoWrapper}>
        <div className={scss.svgWrapper}>
          <svg className={scss.svg}>
            <use href={`${icons}#icon-cart-icon`} />
          </svg>
        </div>
        <h2 className={scss.title}>Cart ({cartProducts.length})</h2>
      </div>
      {cartProducts.length ? (
        <>
          <div className={scss.list}>
            <CartProductsList />
            <CartOrder />
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}
