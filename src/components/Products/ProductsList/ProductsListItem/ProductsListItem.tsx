// import React from "react";
import scss from "./products-list-item.module.scss";
import icons from "../../../../assets/icons.svg";

export interface ProductsListItemProps {
  category: string;
  img: string;
  is10PercentOff: boolean;
  name: string;
  popularity: number;
  price: number;
  size: string;
}

export default function ProductsListItem({
  category,
  is10PercentOff,
  size,
  name,
  img,
  popularity,
  price,
}: ProductsListItemProps) {
  console.log(is10PercentOff);
  return (
    <li className={scss.product_item}>
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
