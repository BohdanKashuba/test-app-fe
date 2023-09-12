export type TGetProducts = Partial<{
  priceStart: number;
  priceEnd: number;
  keywords: string;
  rate: number;
  sortBy: "asc" | "desc" | "top-rated" | "all";
  tags: string[];
}>;

export type TFilters = {
  price: {
    min: number;
    max: number;
  };
};

export type TProduct = {
  id: string;
  description: string;
  name: string;
  imageId: string;
  price: string;
  rate: number;
};
