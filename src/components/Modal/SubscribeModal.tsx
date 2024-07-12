import icons from "../../assets/icons.svg";
import scss from "./subscribe-modal.module.scss";

import * as images from "../../assets/images/index.ts";

export interface SubscribeModalProps {
  closeModal: () => void;
}

export default function SubscribeModal({ closeModal }: SubscribeModalProps) {
  return (
    <>
      <div className={scss.wrapper}>
        <div onClick={closeModal} className={scss.icon_close}>
          <svg className={scss.icon_close_logo}>
            <use href={`${icons}#icon-icon-close`}></use>
          </svg>
        </div>
        <div className={scss.text_wrapper}>
          <p className={scss.title}>
            Thanks for subscribing for <span className={scss.span}>new</span>{" "}
            products
          </p>
          <div className={scss.descr}>
            We promise you organic and high-quality products that will meet your
            expectations. Please stay with us and we promise you many pleasant
            surprises.
          </div>
        </div>
      </div>
      <picture>
        <source
          media={"(min-width: 768px)"}
          srcSet={`${images.footer_modal_tablet}`}
        />
        <source
          media={"(min-width: 1440px)"}
          srcSet={`${images.footer_modal_tablet}`}
        />
        <img
          className={scss.image}
          src={images.footer_modal_mob}
          srcSet={`${images.footer_modal_mob}`}
          alt="Food"
        />
      </picture>
    </>
  );
}
