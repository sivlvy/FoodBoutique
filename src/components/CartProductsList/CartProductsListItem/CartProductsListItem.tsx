import { Product } from "../../../api/api-products.ts";

import scss from "./cart-products-list-item.module.scss";
import icons from "../../../assets/icons.svg";

import { useAppDispatch } from "../../../hooks/hooks.ts";
import { deleteFromCart } from "../../../redux/products/products-slice.ts";

export interface CartProductsListItemProps {
  product: Product;
}

export default function CartProductsListItem({
  product,
}: CartProductsListItemProps) {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = (_id: any) => {
    dispatch(deleteFromCart(_id));
  };

  console.log(product);
  return (
    <li className={scss.product_item}>
      <svg
        className={scss.deleteButton}
        onClick={() => handleDeleteProduct(product._id)}
      >
        <use href={`${icons}#icon-close`} />
      </svg>
      <div className={scss.wrapper}>
        <div className={scss.image_wrapper}>
          <img className={scss.image} src={product.img} alt={product.name} />
        </div>
        <div className={scss.info_wrapper}>
          <div className={scss.nameAndIcon}>
            <p className={scss.name}>{product.name}</p>
          </div>
          <div className={scss.textWrapper}>
            <div className={scss.categoryAndSpan}>
              <p className={scss.subtitle}>Category:</p>
              <p className={scss.span}>{product.category}</p>
            </div>
            <div className={scss.sizeAndSpan}>
              <p className={scss.subtitle}>Size:</p>
              <p className={scss.span}>{product.size}</p>
            </div>
            <div className="flex gap-[10px]"></div>
          </div>
          <p className={scss.price}>{product.price}$</p>
        </div>
      </div>
    </li>
  );
}
