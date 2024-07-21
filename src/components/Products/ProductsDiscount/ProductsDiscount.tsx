// import React from "react";
import scss from "./products-discount.module.scss";
import { Product } from "../../../api/api-products.ts";
import ProductsDiscountItem from "./ProductsDiscountItem/ProductsDiscountItem.tsx";
import Modal from "react-modal";
import ProductModal from "../../Modals/ProductModal/ProductModal.tsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks.ts";
import { useState } from "react";
import { getProductById } from "../../../redux/products/products-operations.ts";

export interface ProductsDiscountProps {
  items: Product[];
}

export default function ProductsDiscount({ items }: ProductsDiscountProps) {
  const dispatch = useAppDispatch();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const product: any = useAppSelector((state) => state.products.product);

  const handleOpenModal = (id: string) => {
    dispatch(getProductById(id));
    setModalIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };

  const filteredItems = items.slice(0, 2);
  return (
    <div className={scss.wrapper}>
      <h2 className={scss.title}>Discount products</h2>
      <ul className={scss.list}>
        {filteredItems.map((product: Product) => (
          <ProductsDiscountItem
            key={product._id}
            product={product}
            openModal={handleOpenModal}
          />
        ))}
        <Modal isOpen={modalIsOpen} className={scss.Modal}>
          <ProductModal product={product} onClose={handleCloseModal} />
        </Modal>
      </ul>
    </div>
  );
}
