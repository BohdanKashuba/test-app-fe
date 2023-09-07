export type TGetProducts = Partial<{
  priceStart: number;
  priceEnd: number;
  name: string;
  rate: number;
  sort: "asc" | "desc" | "top-rated";
}>;

export type TProduct = {
  id: string;
  description: string;
  name: string;
  image: string;
  price: string;
  rate: number;
};
