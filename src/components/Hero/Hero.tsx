// import React from "react";
import * as image from "../../assets/images/index";
import icons from "../../assets/icons.svg";

import scss from "./hero.module.scss";

export interface HeroProps {}

export default function Hero() {
  return (
    <div className={scss.section_wrapper}>
      <h1 className={scss.hero_title}>
        Welcome to the <span className={scss.title_span}>Food</span> Boutique
      </h1>
      <p className={scss.descr}>
        With Food Boutique, you&apos;re not just subscribing to food,
        you&apos;re signing up for a fresher, fitter, and happier you.
      </p>
      <div className={scss.hero_img}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${image.hero_desk_1x} 1x, ${image.hero_desk_2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${image.hero_tablet_1x} 1x, ${image.hero_tablet_2x} 2x`}
          />

          <img
            className={scss.hero_img_content}
            src={image.hero_mob_1x}
            srcSet={`${image.hero_mob_1x} 1x, ${image.hero_mob_2x} 2x`}
            alt="Food boutique"
          />
        </picture>
        <svg className={scss.icon_organic}>
          <use href={`${icons}#icon-organic-food`}></use>
        </svg>
      </div>
    </div>
  );
}
