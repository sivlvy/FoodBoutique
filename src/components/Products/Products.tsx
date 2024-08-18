import ProductsList from "./ProductsList/ProductsList.tsx";
import ProductsPopular from "./ProductsPopular/ProductsPopular.tsx";
import ProductsDiscount from "./ProductsDiscount/ProductsDiscount.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { useEffect, useState } from "react";
import {
  fetchDiscountProducts,
  fetchPopularProducts,
  fetchProducts,
} from "../../redux/products/products-operations.ts";

import scss from "./products.module.scss";
import { resetFilter } from "../../redux/filters/filter-slice.ts";
import NotFoundProductsPage from "./NotFoundProductsPage/NotFoundProductsPage.tsx";
import { useMedia } from "use-media";

export default function Products({}) {
  const { products, popularProducts, discountProducts } = useAppSelector(
    (state) => state.products,
  );
  const { category, keyword } = useAppSelector((state) => state.filters);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);

  const isDesktop = useMedia("(min-width: 1440px)");

  const dispatch = useAppDispatch();
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  useEffect(() => {
    setLimit(isDesktop ? 9 : 6);
    dispatch(fetchProducts({ category, page, keyword, limit }));
  }, [dispatch, page, category, keyword, limit, isDesktop]);

  useEffect(() => {
    dispatch(fetchPopularProducts());
    dispatch(fetchDiscountProducts());
  }, [dispatch]);
  return (
    <div className={scss.list}>
      {products.length ? (
        <ProductsList
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          items={products}
        />
      ) : (
        <NotFoundProductsPage />
      )}

      <div className={scss.wrapper}>
        <ProductsPopular items={popularProducts} />
        <ProductsDiscount items={discountProducts} />
      </div>
    </div>
  );
}
