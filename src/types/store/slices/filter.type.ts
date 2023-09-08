export type TFilterInitialState = {
  price: {
    start: number;
    end?: number;
  };
  rate?: number;
  keywords?: string;
  sort: "all" | "asc" | "desc" | "top-rated";
  tags: string[];
};
