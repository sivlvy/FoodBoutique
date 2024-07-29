import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import CartProductsListItem from "./CartProductsListItem/CartProductsListItem.tsx";

import scss from "./cart-products-list.module.scss";
import icons from "../../assets/icons.svg";
import { resetCart } from "../../redux/products/products-slice.ts";
import { Product } from "../../api/api-products.ts";

export interface CartProductsListProps {}

export default function CartProductsList({}: CartProductsListProps) {
  const products: Product[] = useAppSelector(
    (state) => state.products.cartProducts,
  );

  const dispatch = useAppDispatch();

  const handleDeleteProducts = () => {
    dispatch(resetCart());
  };

  return (
    <div>
      <div className={scss.buttonWrapper} onClick={handleDeleteProducts}>
        <p className={scss.deleteButton}>Delete all</p>
        <svg className={scss.svg}>
          <use href={`${icons}#icon-close`} />
        </svg>
      </div>
      <ul className={scss.list}>
        {products.map((product) => (
          <CartProductsListItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}
