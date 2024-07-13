// import React from "react";

import scss from "./products-discount-item.module.scss";

import icons from "../../../../assets/icons.svg";

export interface ProductsDiscountItemProps {
  img: string;
  name: string;
  price: number;
}

export default function ProductsDiscountItem({
  img,
  price,
  name,
}: ProductsDiscountItemProps) {
  return (
    <li className={scss.item}>
      <div className={scss.wrapper}>
        <div className={scss.imgWrapper}>
          <img className={scss.image} src={img} alt={name} />
          <svg className={scss.icon}>
            <use href={`${icons}#icon-discount-food`}></use>
          </svg>
        </div>
        <div className={scss.infoWrapper}>
          <h2 className={scss.title}>{name}</h2>
          <div className={scss.priceAndIcon}>
            <p className={scss.price}>{price}$</p>
            <div className={scss.icon_wrapper}>
              <svg className={scss.cart_icon}>
                <use href={`${icons}#icon-cart-icon`}></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
