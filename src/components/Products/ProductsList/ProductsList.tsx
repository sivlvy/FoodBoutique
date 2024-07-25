// import React from "react";

import { Product } from "../../../api/api-products.ts";
import ProductsListItem from "./ProductsListItem/ProductsListItem.tsx";
import scss from "./products-list.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks.ts";
import { getProductById } from "../../../redux/products/products-operations.ts";
import { useEffect, useState } from "react";

import Modal from "react-modal";
import ProductModal from "../../Modals/ProductModal/ProductModal.tsx";

export interface ProductsListProps {
  items: Product[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export default function ProductsList({
  items,
  handleNextPage,
  handlePrevPage,
}: ProductsListProps) {
  const dispatch = useAppDispatch();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = (id: string) => {
    dispatch(getProductById(id));
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalIsOpen]);

  const product: any = useAppSelector((state) => state.products.product);

  return (
    <div className="flex flex-col">
      <ul className={scss.list}>
        {items.map((product: Product) => (
          <ProductsListItem
            product={product}
            key={product._id}
            openModal={handleOpenModal}
          />
        ))}
        <Modal
          className={scss.Modal}
          overlayClassName={scss.Overlay}
          isOpen={modalIsOpen}
        >
          <ProductModal onClose={handleCloseModal} product={product} />
        </Modal>
      </ul>
      <div>
        <p>pagination</p>
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}
