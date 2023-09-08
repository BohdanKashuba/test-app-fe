import React, { FC, useCallback } from "react";
import Styled from "./styled";
import ProductsList from "./components/ProductsList";
import Select from "../../../../components/Select";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { filterSelector } from "../../../../store/selectors";
import { setFilter } from "../../../../store/slices/filter.slice";
import Chips from "../../../../components/Chips";
import { useGetAllTagsQuery } from "../../../../store/api/tags";

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filterSelector);

  const { data, isLoading } = useGetAllTagsQuery();

  const onSelectChip = useCallback(
    (id: string) => {
      if (filters.tags.includes(id)) {
        dispatch(setFilter({ tags: filters.tags.filter((t) => t !== id) }));
        return;
      }

      dispatch(setFilter({ tags: [...filters.tags, id] }));
    },
    [filters.tags, dispatch]
  );

  const onSelectSortBy = useCallback(
    (val: string) => dispatch(setFilter({ sort: val })),
    [dispatch]
  );

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
        onSelect={onSelectSortBy}
      />
      <Styled.ChipsWrapper>
        {!isLoading && (
          <Chips
            title="Related"
            items={
              data?.map((item) => ({ id: item.id, label: item.name })) ?? []
            }
            onSelect={onSelectChip}
            selected={filters.tags}
          />
        )}
      </Styled.ChipsWrapper>

      <ProductsList />
    </Styled.Wrapper>
  );
};

export default Products;
