// import React from "react";
import scss from "./products-popular-item.module.scss";
import icons from "../../../../assets/icons.svg";
import { Product } from "../../../../api/api-products.ts";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks.ts";
import React from "react";
import { addToCart } from "../../../../redux/products/products-slice.ts";

export interface ProductsPopularItemProps {
  product: Product;
  openModal: (id: any) => void;
}

export default function ProductsPopularItem({
  product,
  openModal,
}: ProductsPopularItemProps) {
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector((state) => state.products.cartProducts);

  const isDuplicateProduct = cartProducts.some(
    (item: Product) => item._id === product._id,
  );

  const handleClickCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDuplicateProduct) {
      dispatch(addToCart(product));
    }
  };

  return (
    <li onClick={() => openModal(product._id)} className={scss.product_item}>
      <div className={scss.wrapper}>
        <div className={scss.image_wrapper}>
          <img className={scss.image} src={product.img} alt={product.name} />
        </div>
        <div className={scss.info_wrapper}>
          <div className={scss.nameAndIcon}>
            <p className={scss.name}>{product.name}</p>
            <button onClick={handleClickCart}>
              <div className={scss.iconWrapper}>
                {!isDuplicateProduct ? (
                  <svg className={scss.icon_cart}>
                    <use href={`${icons}#icon-cart-icon`}></use>
                  </svg>
                ) : (
                  <svg className={scss.icon_cart_done}>
                    <use href={`${icons}#icon-done-icon`}></use>
                  </svg>
                )}
              </div>
            </button>
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
