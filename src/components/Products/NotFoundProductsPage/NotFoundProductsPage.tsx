import scss from "./not-found-products-page.module.scss";

export interface NotFoundProductsPageProps {}

export default function NotFoundProductsPage({}: NotFoundProductsPageProps) {
  return (
    <div className={scss.wrapper}>
      <div className={scss.textWrapper}>
        <h2 className={scss.title}>
          Nothing was found for the selected{" "}
          <span className={scss.span}>filters</span>
        </h2>
        <p className={scss.descr}>
          Try adjusting your search parameters or browse our range by other
          criteria to find the perfect product for you.
        </p>
      </div>
    </div>
  );
}
