// import React from "react";

import scss from "./products-discount-item.module.scss";

import icons from "../../../../assets/icons.svg";
import { Product } from "../../../../api/api-products.ts";

export interface ProductsDiscountItemProps {
  product: Product;
  openModal: (id: any) => void;
}

export default function ProductsDiscountItem({
  product,
  openModal,
}: ProductsDiscountItemProps) {
  return (
    <li className={scss.item} onClick={() => openModal(product._id)}>
      <div className={scss.wrapper}>
        <div className={scss.imgWrapper}>
          <img className={scss.image} src={product.img} alt={product.name} />
          <svg className={scss.icon}>
            <use href={`${icons}#icon-discount-food`}></use>
          </svg>
        </div>
        <div className={scss.infoWrapper}>
          <h2 className={scss.title}>{product.name}</h2>
          <div className={scss.priceAndIcon}>
            <p className={scss.price}>{product.price}$</p>
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
