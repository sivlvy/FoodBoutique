import scss from "./cart-order.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks.ts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getOrders } from "../../../redux/products/products-operations.ts";
import { OrderProductProps } from "../../../api/api-products.ts";
import Modal from "react-modal";
import { OrderModal } from "../../Modals/OrderModal/OrderModal.tsx";

export interface CartOrderProps {}

export default function CartOrder({}: CartOrderProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector((state) => state.products.cartProducts);

  const { register, reset, handleSubmit } = useForm();

  const totalPrice = Number(
    cartProducts
      .reduce((previousValue: number, { price }: any) => {
        return previousValue + price;
      }, 0)
      .toFixed(2),
  );

  const order: OrderProductProps = cartProducts.map(({ _id }: any) => ({
    productId: _id,
    amount: 1,
  }));

  const onSubmit = (e: any): void => {
    dispatch(
      getOrders({
        email: e.email,
        products: order,
      }),
    );
    reset();
    openModal();
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <div className={scss.wrapper}>
      <h2 className={scss.title}>Your order</h2>
      <div className={scss.counter}>
        <p className={scss.counterTitle}>Total</p>
        <div className={scss.priceWrapper}>
          <span className={scss.span}>Sum: </span>
          <p className={scss.price}>${totalPrice}</p>
        </div>
      </div>
      <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={scss.input}
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        <button className={scss.button} type="submit">
          Checkout
        </button>
      </form>
      <Modal isOpen={modalIsOpen} className={scss.modal}>
        <OrderModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}
