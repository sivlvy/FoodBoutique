import { resetCart } from "../../../redux/products/products-slice.ts";
import { useAppDispatch } from "../../../hooks/hooks.ts";
import scss from "./order-modal.module.scss";
import * as images from "../../../assets/images/index.ts";
import icons from "../../../assets/icons.svg";

export interface OrderModalProps {
  closeModal: () => void;
}

export const OrderModal = ({ closeModal }: OrderModalProps) => {
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(resetCart());
    closeModal();
  };

  return (
    <>
      <div className={scss.wrapper}>
        <div onClick={handleClose} className={scss.icon_close}>
          <svg className={scss.icon_close_logo}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </div>
        <div className={scss.text_wrapper}>
          <img src={images.order_success} alt="" className={scss.image} />
          <p className={scss.title}>ORDER SUCCESS</p>
          <div className={scss.descr}>
            Thank you for shopping at Food Boutique. Your order has been
            received and is now being freshly prepared just for you! Get ready
            to indulge in nourishing goodness, delivered right to your doorstep.
            We&lsquo;re thrilled to be part of your journey to better health and
            happiness.
          </div>
        </div>
      </div>
    </>
  );
};
