import { TProduct } from "./products.type";

export type TWatch = {
  id: string;
  watches: TProduct[];
};

export type TGetWatch = {
  userId: string;
  productId: string;
};
