// import React from "react";

import { Product } from "../../../api/api-products.ts";

import scss from "./products-popular.module.scss";
import ProductsPopularItem from "./ProductsPopularItem/ProductsPopularItem.tsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks.ts";
import { useState } from "react";
import { getProductById } from "../../../redux/products/products-operations.ts";
import Modal from "react-modal";
import ProductModal from "../../Modals/ProductModal/ProductModal.tsx";

export interface ProductsPopularProps {
  items: Product[];
}

export default function ProductsPopular({ items }: ProductsPopularProps) {
  const dispatch = useAppDispatch();
  const product: any = useAppSelector((state) => state.products.product);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = (id: string) => {
    dispatch(getProductById(id));
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <h2 className={scss.title}>Popular products</h2>
      <div className={scss.wrapper}>
        <ul className={scss.list}>
          {items.map((product: Product) => (
            <ProductsPopularItem
              key={product._id}
              product={product}
              openModal={handleOpenModal}
            />
          ))}
        </ul>
        <Modal isOpen={modalIsOpen}>
          <ProductModal product={product} onClose={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
}
