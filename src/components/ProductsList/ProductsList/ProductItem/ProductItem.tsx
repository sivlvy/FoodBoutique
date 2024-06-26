// import React from "react";

export interface ProductItemProps {
  category: string;
  img: string;
  is10PercentOff: boolean;
  name: string;
  popularity: number;
  price: number;
  size: string;
  isError: string | null;
  isLoading: boolean;
}

export default function ProductItem({
  category,
  img,
  isLoading,
  name,
  isError,
  size,
  price,
  is10PercentOff,
  popularity,
}: ProductItemProps) {
  return <div>ProductItem</div>;
}
