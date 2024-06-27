import { create } from "zustand";
import axios from "axios";

export interface Product {
  _id?: string;
  name: string;
  img: string;
  price: number;
  size: string;
  is10PercentOff: boolean;
  popularity: number;
  category: string;
}

export interface ProductStore {
  products: Product[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  isError: string | null;
  fetchProducts: (page: number) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentPage: 1,
  totalPages: 1,
  isError: null,
  isLoading: false,
  fetchProducts: async (page: number) => {
    set({ isLoading: true, isError: null });
    try {
      const { data } = await axios.get(
        `https://food-boutique.b.goit.study/api/products?page=${page}`,
      );
      set({
        products: data.results,
        currentPage: data.page,
        isLoading: false,
        totalPages: data.totalPages,
      });
    } catch (error) {
      if (error instanceof Error) {
        set({ isError: error.message, isLoading: false });
      } else {
        set({ isError: "An unknown error occurred.", isLoading: false });
      }
    }
  },
}));

export default useProductStore;
