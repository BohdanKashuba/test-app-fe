export type TGetProducts = Partial<{
  priceStart: number;
  priceEnd: number;
  keywords: string;
  rate: number;
  sortBy: "asc" | "desc" | "top-rated" | "all";
  tags: string[];
}>;

export type TProduct = {
  id: string;
  description: string;
  name: string;
  image: string;
  price: string;
  rate: number;
};
