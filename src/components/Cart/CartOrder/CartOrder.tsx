import scss from "./cart-order.module.scss";
import { useAppSelector } from "../../../hooks/hooks.ts";
import { useForm } from "react-hook-form";

export interface CartOrderProps {}

export default function CartOrder({}: CartOrderProps) {
  const cartProducts = useAppSelector((state) => state.products.cartProducts);

  const { register } = useForm();

  const totalPrice = Number(
    cartProducts
      .reduce((previousValue: number, { price }: any) => {
        return previousValue + price;
      }, 0)
      .toFixed(2),
  );

  // const onSubmit = (data: string) => {
  //   console.log(data);
  //   reset();
  // };

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
      <form className={scss.form}>
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
          Send
        </button>
      </form>
    </div>
  );
}
