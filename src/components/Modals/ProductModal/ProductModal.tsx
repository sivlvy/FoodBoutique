// import React from "react";

import { Product } from "../../../api/api-products.ts";

import scss from "./product-modal.module.scss";

import icons from "../../../assets/icons.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks.ts";
import {
  addToCart,
  deleteFromCart,
} from "../../../redux/products/products-slice.ts";

export interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { isLoading, cartProducts } = useAppSelector((state) => state.products);

  const { _id }: any = product;

  const dispatch = useAppDispatch();

  const isDuplicateProduct = cartProducts.some(
    (product: Product) => product._id === _id,
  );

  const handleToggleCart = () => {
    if (!isDuplicateProduct) {
      dispatch(addToCart(product));
    } else {
      dispatch(deleteFromCart(_id));
    }
  };

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={scss.contentWrapper}>
          <div className={scss.imageWrapper}>
            <img className={scss.image} src={product.img} alt={product.name} />
          </div>
          <div className={scss.infoWrapper}>
            <h2 className={scss.title}>{product.name}</h2>
            <div className="flex gap-[5px] flex-col">
              <p className={scss.category}>Category: {product.category}</p>
              <p className={scss.size}>Size: {product.size}</p>
              <p className={scss.popularity}>
                Popularity: {product.popularity}
              </p>
              <p className={scss.description}>{product.desc}</p>
            </div>
          </div>
          <div className={scss.priceAndIcon}>
            <div className={scss.settingsWrapper}>
              <p className={scss.price}>${product.price}</p>
              <button className={scss.button} onClick={handleToggleCart}>
                {!isDuplicateProduct ? "Add to" : "Remove from"}
                <svg className={scss.iconCart}>
                  <use href={`${icons}#icon-cart-icon`}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
