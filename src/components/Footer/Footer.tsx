// import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Modal from "react-modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import icons from "../../assets/icons.svg";
import scss from "./footer.module.scss";
import SubscribeModal from "../SubscribeModal/SubscribeModal.tsx";

interface Input {
  email: string;
}

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState<Input>();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { register, reset, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    setValue(data);
    console.log(value);
    reset();
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  // const closeModal = (): void => {
  //   setModalIsOpen(false);
  // };

  return (
    <footer className={scss.footer}>
      <div className={scss.wrapper}>
        <div className={scss.links_wrapper}>
          <NavLink to={"/"} className={scss.logo}>
            <svg className={scss.logo_icon}>
              <use href={`${icons}#icon-logo-mob`}></use>
            </svg>
          </NavLink>
          <ul className={scss.social_links}>
            <li className={scss.social_icon}>
              <Link to={"/"}>
                <svg className="icon icon-facebook-icon">
                  <use href={`${icons}#icon-facebook-icon`}></use>
                </svg>
              </Link>
            </li>
            <li className={scss.social_icon}>
              <Link to={"/"}>
                <svg className="icon icon-facebook-icon">
                  <use href={`${icons}#icon-instagram-icon`}></use>
                </svg>
              </Link>
            </li>
            <li className={scss.social_icon}>
              <Link to={"/"}>
                <svg className="icon icon-facebook-icon">
                  <use href={`${icons}#icon-youtube-icon`}></use>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className={scss.text_wrapper}>
          <h2 className={scss.titlev}>
            Discover the Variety of Flavors and Quality
          </h2>
          <p className={scss.text_descr}>
            An online store where you will find fresh, natural and delicious
            products for a healthy life and unforgettable gastronomic
            adventures.
          </p>
        </div>
        <div className={scss.subscribe_wrapper}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={scss.subscribe_descr}>
              Subscribe and learn about new products!
            </label>
            <input className={scss.input} {...register("email")} />
            {/*<Modal isOpen={modalIsOpen}>*/}
            {/*  <SubscribeModal />*/}
            {/*</Modal>*/}
            <button className={scss.button} onClick={openModal}>
              Send
            </button>
          </form>
        </div>
        <div className={scss.description_wrapper}>
          <p className={scss.web_name}>Food Boutique. All rights reserved.</p>
          <Link to={"/"}>Privacy policy / Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
