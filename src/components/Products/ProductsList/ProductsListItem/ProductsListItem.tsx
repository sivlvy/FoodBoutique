// import React from "react";
import scss from "./products-list-item.module.scss";
import icons from "../../../../assets/icons.svg";
import { Product } from "../../../../api/api-products.ts";

export interface ProductsListItemProps {
  product: Product;
  openModal: (id: any) => void;
}

export default function ProductsListItem({
  product,
  openModal,
}: ProductsListItemProps) {
  const { category, size, name, img, popularity, price, _id } = product;

  return (
    <li onClick={() => openModal(_id)} className={scss.product_item}>
      <div className={scss.wrapper}>
        <div className={scss.img_wrapper}>
          <img src={img} alt={name} />
        </div>
        <div className={scss.text_wrapper}>
          <p className={scss.name}>{name}</p>
          <div className={scss.info_wrapper}>
            <p className={scss.category}>
              Category: <span className={scss.span}>{category}</span>
            </p>
            <p className={scss.size}>
              Size: <span className={scss.span}>{size}</span>
            </p>
            <p className={scss.popularity}>
              Popularity: <span className={scss.span}>{popularity}</span>
            </p>
          </div>
          <div className={scss.priceAndIcon}>
            <p className={scss.price}>{price} $</p>
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
