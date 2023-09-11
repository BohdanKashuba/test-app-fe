import React, { FC, useCallback } from "react";
import RangeSlider from "../../../../components/RangeSlider";
import Accordion from "../../../../components/Accordion";
import RatingFilterItem from "../../../../components/RatingFilterItem";
import Styled from "./styled";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilter } from "../../../../store/slices/filter.slice";
import { filterSelector } from "../../../../store/selectors";
import { useGetFiltersQuery } from "../../../../store/api/products";

const Sidebar: FC = () => {
  const filters = useAppSelector(filterSelector);

  const { data, isLoading } = useGetFiltersQuery();

  const dispatch = useAppDispatch();

  const ratingHandler = useCallback(
    (val: number) => {
      if (filters.rate === val) {
        dispatch(setFilter({ rate: 0 }));
      } else {
        dispatch(setFilter({ rate: val }));
      }
    },
    [dispatch, filters.rate]
  );

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Styled.FilterItem>
        <Styled.FilterTitle>Price Range Selected</Styled.FilterTitle>
        <RangeSlider
          min={data?.price.min ?? 0}
          max={data?.price.max ?? 100}
          onChange={(vals) =>
            dispatch(setFilter({ price: { start: vals[0], end: vals[1] } }))
          }
          tooltipPrefix="$"
        />
      </Styled.FilterItem>
      <Accordion title="CUSTOMER REVIEWS">
        {Array.from({ length: 4 }).map((_, idx, arr) => (
          <RatingFilterItem
            key={"rating-filter-item-" + idx}
            count={arr.length - idx}
            onClick={ratingHandler}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
