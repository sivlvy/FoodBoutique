import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const productInstance = axios.create({
  baseURL,
});

export interface Product {
  _id?: string;
  desc?: string;
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

export interface ParamsProps {
  keyword?: string | null;
  category?: string | null;
  page: number;
}

export const getProducts = async (params: ParamsProps) => {
  const { data } = await productInstance.get<ProductListResponse>(`/products`, {
    params,
  });
  console.log(data);
  return data;
};

export const getCategories = async () => {
  const { data } = await productInstance.get<string[]>("/products/categories");
  return data;
};

export const getProductsByKeyword = async (
  keyword: string,
  category: string,
) => {
  const { data } = await productInstance.get(
    `/products?keyword=${keyword}&category=${category}`,
  );
  return data;
};

export const getProductById = async (productId: string) => {
  const { data } = await productInstance.get(`/products/${productId}`);
  return data;
};

export const getPopularProducts = async (limit: number = 5) => {
  const { data } = await productInstance.get(
    `/products/popular?limit=${limit}`,
  );
  return data;
};

export const getDiscountProducts = async () => {
  const { data } = await productInstance.get("/products/discount");
  return data;
};

export const addSubscription = async () => {
  const { data } = await productInstance.post("/products/subscription");
  return data;
};

export const addOrder = async () => {
  const { data } = await productInstance.post("/products/orders");
  return data;
};
