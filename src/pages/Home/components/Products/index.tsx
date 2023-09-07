import React, { FC } from "react";
import Styled from "./styled";
import ProductsList from "./components/ProductsList";
import Select from "../../../../components/Select";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { filterSelector } from "../../../../store/selectors";
import { setFilter } from "../../../../store/slices/filter.slice";

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filterSelector);

  return (
    <Styled.Wrapper>
      <Select
        label="SORT BY"
        options={[
          { id: "all", label: "All" },
          { id: "asc", label: "The cheapest" },
          { id: "desc", label: "The most expensive" },
          { id: "top-rated", label: "Top rated" },
        ]}
        active={filters.sort}
        onSelect={(val) => dispatch(setFilter({ sort: val }))}
      />
      <ProductsList />
    </Styled.Wrapper>
  );
};

export default Products;
