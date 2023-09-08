import React, { FC } from "react";
import Styled from "./styled";
import { useGetAllQuery } from "../../../../../../store/api/products";
import ProductCard from "../ProductCard";
import { useAppSelector } from "../../../../../../store/hooks";
import { filterSelector } from "../../../../../../store/selectors";
import { useDebounce } from "usehooks-ts";

const ProductsList: FC = () => {
  const filters = useAppSelector(filterSelector);

  const debouncedKeywords = useDebounce(filters.keywords, 300);

  const { data, isLoading } = useGetAllQuery({
    priceEnd: filters.price.end,
    priceStart: filters.price.start,
    rate: filters.rate,
    keywords: debouncedKeywords,
    sortBy: filters.sort,
    tags: filters.tags,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Styled.Wrapper>
      {data?.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </Styled.Wrapper>
  );
};

export default ProductsList;
