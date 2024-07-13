import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const productInstance = axios.create({
  baseURL,
});

export interface Product {
  _id?: string;
  index?: number;
  name: string;
  img: string;
  price: number;
  size: string;
  is10PercentOff: boolean;
  popularity: number;
  category: string;
}

export interface ProductList {
  products: Product[];
}

export interface ProductListResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Product[];
}

export const getProducts = async (page: number = 1) => {
  const { data } = await productInstance.get<ProductListResponse>(
    `?page=${page}`,
  );
  return data;
};

export const getCategories = async () => {
  const { data } = await productInstance.get<string[]>("/categories");
  return data;
};

export const getProductsByKeyword = async (
  keyword: string,
  category: string,
) => {
  const { data } = await productInstance.get(
    `?keyword=${keyword}&category=${category}`,
  );
  return data;
};

export const getProductById = async (productId: string) => {
  const { data } = await productInstance.get(`/:id=${productId}`);
  return data;
};

export const getPopularProducts = async (limit: number = 5) => {
  const { data } = await productInstance.get(`/popular?limit=${limit}`);
  return data;
};

export const getDiscountProducts = async () => {
  const { data } = await productInstance.get("/discount");
  return data;
};

export const addSubscription = async () => {
  const { data } = await productInstance.post("/subscription");
  return data;
};

export const addOrder = async () => {
  const { data } = await productInstance.post("/orders");
  return data;
};
