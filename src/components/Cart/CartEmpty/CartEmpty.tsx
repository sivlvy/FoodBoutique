import scss from "./cart-empty.module.scss";

import * as images from "../../../assets/images";

export interface CartEmptyProps {}

export default function CartEmpty({}: CartEmptyProps) {
  return (
    <div className={scss.wrapper}>
      <img className={scss.img} src={`${images.empty_cart}`} alt="Empty cart" />
      <h3 className={scss.title}>
        Your basket is <span className={scss.span}>empty...</span>
      </h3>
      <p className={scss.descr}>
        Go to the main page to select your favorite products and add them to the
        cart.
      </p>
    </div>
  );
}
