// import React from "react";
import scss from "./products-popular-item.module.scss";
import icons from "../../../../assets/icons.svg";
import { Product } from "../../../../api/api-products.ts";

export interface ProductsPopularItemProps {
  product: Product;
  openModal: (id: any) => void;
}

export default function ProductsPopularItem({
  product,
  openModal,
}: ProductsPopularItemProps) {
  return (
    <li onClick={() => openModal(product._id)} className={scss.product_item}>
      <div className={scss.wrapper}>
        <div className={scss.image_wrapper}>
          <img className={scss.image} src={product.img} alt={product.name} />
        </div>
        <div className={scss.info_wrapper}>
          <div className={scss.nameAndIcon}>
            <p className={scss.name}>{product.name}</p>
            <div className={scss.iconWrapper}>
              <svg className={scss.icon_cart}>
                <use href={`${icons}#icon-cart-icon`}></use>
              </svg>
            </div>
          </div>
          <div className={scss.textWrapper}>
            <div className={scss.categoryAndSpan}>
              <p className={scss.subtitle}>Category:</p>
              <p className={scss.span}>{product.category}</p>
            </div>
            <div className="flex gap-[10px]">
              <div className={scss.sizeAndSpan}>
                <p className={scss.subtitle}>Size:</p>
                <p className={scss.span}>{product.size}</p>
              </div>
              <div className={scss.popularityAndSpan}>
                <p className={scss.subtitle}>Popularity:</p>
                <p className={scss.span}>{product.popularity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
