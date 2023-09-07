export type TGetProducts = Partial<{
  priceStart: number;
  priceEnd: number;
  name: string;
  rate: number;
  sortBy: "asc" | "desc" | "top-rated" | "all";
}>;

export type TProduct = {
  id: string;
  description: string;
  name: string;
  image: string;
  price: string;
  rate: number;
};
