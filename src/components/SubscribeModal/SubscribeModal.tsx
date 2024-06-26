// import React from "react";

// import scss from "./subscribe-modal.module.scss";

export interface SubscribeModalProps {
  closeModal: () => void;
}

export default function SubscribeModal({ closeModal }: SubscribeModalProps) {
  return (
    <div>
      <div className="">Modal</div>
      <button onClick={closeModal}>X</button>
    </div>
  );
}
