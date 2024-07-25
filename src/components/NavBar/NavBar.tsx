// import React from "react";

import scss from "./nav-bar.module.scss";
import icons from "../../assets/icons.svg";

import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks.ts";

export interface NavBarProps {}

export default function NavBar() {
  const cartProducts = useAppSelector((state) => state.products.cartProducts);

  console.log(cartProducts);

  return (
    <header className={scss.header}>
      <div className={scss.wrapper}>
        <Link className={scss.logo_wrapper} to="/">
          <svg className={scss.logo_icon}>
            <use href={`${icons}#icon-logo-desk`}></use>
          </svg>
        </Link>
        <div className={scss.header_links}>
          <NavLink className={scss.header_link} to="/">
            Home
          </NavLink>
          <NavLink className={scss.header_link_second} to="/cart">
            <div className={scss.cart_icon_wrapper}>
              <svg className={scss.cart_icon}>
                <use href={`${icons}#icon-cart-icon`}></use>
              </svg>
            </div>
            <p className={scss.cart_text}>Cart ({cartProducts.length})</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
