// import React from "react";
import scss from "./products-popular-item.module.scss";
import icons from "../../../../assets/icons.svg";

export interface ProductsPopularItemProps {
  name: string;
  img: string;
  category: string;
  size: string;
  popularity: number;
}

export default function ProductsPopularItem({
  name,
  popularity,
  size,
  img,
  category,
}: ProductsPopularItemProps) {
  return (
    <li className={scss.product_item}>
      <div className={scss.wrapper}>
        <div className={scss.image_wrapper}>
          <img className={scss.image} src={img} alt={name} />
        </div>
        <div className={scss.info_wrapper}>
          <div className={scss.nameAndIcon}>
            <p className={scss.name}>{name}</p>
            <div className={scss.iconWrapper}>
              <svg className={scss.icon_cart}>
                <use href={`${icons}#icon-cart-icon`}></use>
              </svg>
            </div>
          </div>
          <div className={scss.textWrapper}>
            <div className={scss.categoryAndSpan}>
              <p className={scss.subtitle}>Category:</p>
              <p className={scss.span}>{category}</p>
            </div>
            <div className={scss.sizeAndSpan}>
              <p className={scss.subtitle}>Size:</p>
              <p className={scss.span}>{size}</p>
            </div>
            <div className={scss.popularityAndSpan}>
              <p className={scss.subtitle}>Popularity:</p>
              <p className={scss.span}>{popularity}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
