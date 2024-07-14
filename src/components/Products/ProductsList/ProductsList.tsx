// import React from "react";

import { Product } from "../../../api/api-products.ts";
import ProductsListItem from "./ProductsListItem/ProductsListItem.tsx";
import scss from "./products-list.module.scss";
import { useAppDispatch } from "../../../hooks/hooks.ts";
import { getProductById } from "../../../redux/products/products-operations.ts";
import { useState } from "react";

import Modal from "react-modal";
import ProductModal from "../../Modals/ProductModal/ProductModal.tsx";

export interface ProductsListProps {
  items: Product[];
}

export default function ProductsList({ items }: ProductsListProps) {
  const dispatch = useAppDispatch();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = (id: string) => {
    dispatch(getProductById(id));
    setModalIsOpen(true);
  };

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
        <Modal isOpen={modalIsOpen}>
          <ProductModal />
        </Modal>
      </ul>
    </div>
  );
}
