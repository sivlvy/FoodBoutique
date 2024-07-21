import { Link, NavLink } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Container from "../Container/Container.tsx";
import icons from "../../assets/icons.svg";
import scss from "./footer.module.scss";
import SubscribeModal from "../Modals/FooterModal/SubscribeModal.tsx";

interface Input {
  email: string;
}

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    openModal();
    console.log(data);
    reset();
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <footer className={scss.footer}>
      <Container>
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
                  <svg className={scss.icon_social}>
                    <use href={`${icons}#icon-facebook-icon`}></use>
                  </svg>
                </Link>
              </li>
              <li className={scss.social_icon}>
                <Link to={"/"}>
                  <svg className={scss.icon_social}>
                    <use href={`${icons}#icon-instagram-icon`}></use>
                  </svg>
                </Link>
              </li>
              <li className={scss.social_icon}>
                <Link to={"/"}>
                  <svg className={scss.icon_social}>
                    <use href={`${icons}#icon-youtube-icon`}></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className={scss.tablet_container}>
            <div className={scss.desktop_container}>
              <div className={scss.text_wrapper}>
                <h2 className={scss.title}>
                  Discover the Variety of Flavors and Quality
                </h2>
                <p className={scss.text_descr}>
                  An online store where you will find fresh, natural and
                  delicious products for a healthy life and unforgettable
                  gastronomic adventures.
                </p>
              </div>
              <div className={scss.subscribe_wrapper}>
                <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
                  <p className={scss.subscribe_descr}>
                    Subscribe and learn about new products!
                  </p>
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
                  {errors.email && (
                    <p className={scss.error}>{errors.email.message}</p>
                  )}
                  <Modal
                    isOpen={modalIsOpen}
                    className={scss.modal}
                    onRequestClose={closeModal}
                    closeTimeoutMS={300}
                  >
                    <SubscribeModal closeModal={closeModal} />
                  </Modal>
                  <button className={scss.button} type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className={scss.description_wrapper}>
              <p className={scss.web_name}>
                Food Boutique. All rights reserved.
              </p>
              <Link className={scss.web_name} to={"/"}>
                Privacy policy / Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
