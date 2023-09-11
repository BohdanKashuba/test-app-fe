import React, { FC } from "react";
import Styled from "./styled";
import { useGetAllProductsQuery } from "../../../../../../store/api/products";
import ProductCard from "../ProductCard";
import { useAppSelector } from "../../../../../../store/hooks";
import { filterSelector } from "../../../../../../store/selectors";
import { useDebounce } from "usehooks-ts";

const ProductsList: FC = () => {
  const filters = useAppSelector(filterSelector);

  const debouncedKeywords = useDebounce(filters.keywords, 300);

  const { data, isLoading } = useGetAllProductsQuery({
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
      {data?.length ? (
        data?.map((product) => <ProductCard key={product.id} data={product} />)
      ) : (
        <span>Products list is empty for now</span>
      )}
    </Styled.Wrapper>
  );
};

export default ProductsList;
