import React, { FC } from "react";
import RangeSlider from "../../../../components/RangeSlider";
import Accordion from "../../../../components/Accordion";
import RatingFilterItem from "../../../../components/RatingFilterItem";
import Styled from "./styled";
import { useAppDispatch } from "../../../../store/hooks";
import { setFilter } from "../../../../store/slices/filter.slice";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Styled.FilterItem>
        <Styled.FilterTitle>Price Range Selected</Styled.FilterTitle>
        <RangeSlider
          min={28}
          max={128}
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
            onClick={(val) => dispatch(setFilter({ rate: val }))}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
