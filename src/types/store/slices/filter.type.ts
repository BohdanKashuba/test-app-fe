export type TFilterInitialState = {
  price: {
    start: number;
    end?: number;
  };
  rate?: number;
  name?: string;
  sort: "all" | "asc" | "desc" | "top-rated";
};
