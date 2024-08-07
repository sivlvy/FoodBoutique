// import React from "react";

import scss from "./products-discount-item.module.scss";

import icons from "../../../../assets/icons.svg";
import { Product } from "../../../../api/api-products.ts";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks.ts";
import React from "react";
import {
  addToCart,
  deleteFromCart,
} from "../../../../redux/products/products-slice.ts";

export interface ProductsDiscountItemProps {
  product: Product;
  openModal: (id: any) => void;
}

export default function ProductsDiscountItem({
  product,
  openModal,
}: ProductsDiscountItemProps) {
  const cartProducts = useAppSelector((state) => state.products.cartProducts);
  const { _id }: any = product;
  const dispatch = useAppDispatch();

  const isDuplicateProduct = cartProducts.some(
    (item: Product) => item._id === product._id,
  );

  const handleToggleCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDuplicateProduct) {
      dispatch(addToCart(product));
    } else {
      dispatch(deleteFromCart(_id));
    }
  };
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
            <button onClick={handleToggleCart}>
              <div className={scss.icon_wrapper}>
                {!isDuplicateProduct ? (
                  <svg className={scss.cart_icon}>
                    <use href={`${icons}#icon-cart-icon`}></use>
                  </svg>
                ) : (
                  <svg className={scss.cart_icon}>
                    <use href={`${icons}#icon-done-icon`}></use>
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
