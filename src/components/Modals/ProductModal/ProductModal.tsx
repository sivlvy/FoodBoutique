// import React from "react";

import { Product } from "../../../api/api-products.ts";

import scss from "./product-modal.module.scss";

import icons from "../../../assets/icons.svg";

export interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { img, name, category, size, popularity, desc, price } = product;
  console.log(product);
  if (!product) {
    return null;
  }
  return (
    <div className={scss.wrapper}>
      <button onClick={onClose}>
        <svg className={scss.svgWrapper}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <div className={scss.imageWrapper}>
        <img className={scss.image} src={img} alt={name} />
      </div>
      <div className={scss.infoWrapper}>
        <h2 className={scss.title}>{name}</h2>
        <p className={scss.category}>Category: {category}</p>
        <p className={scss.size}>Size: {size}</p>
        <p className={scss.popularity}>Popularity: {popularity}</p>
      </div>
      <p className={scss.description}>{desc}</p>
      <div className={scss.priceAndIcon}>
        <p className={scss.price}>${price}</p>
        <button className={scss.button}>
          Add to
          <svg>
            <use href={`${icons}#icon-cart-icon`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
