// import React from "react";

export interface PaginationProps {
  isLoading: boolean;
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  isLoading,
  totalPages,
  onPageChange,
  currentPage,
}: PaginationProps) {
  const handlePrevPage = () => {
    if (currentPage > 1 && !isLoading) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}
