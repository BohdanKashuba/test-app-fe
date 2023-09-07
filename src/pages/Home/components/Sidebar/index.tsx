import React, { FC } from "react";
import RangeSlider from "../../../../components/RangeSlider";
import Accordion from "../../../../components/Accordion";
import RatingFilterItem from "../../../../components/RatingFilterItem";
import Styled from "./styled";

const Sidebar: FC = () => {
  return (
    <div>
      <Styled.FilterItem>
        <Styled.FilterTitle>Price Range Selected</Styled.FilterTitle>
        <RangeSlider
          min={28}
          max={128}
          onChange={(vals) => console.log(vals)}
          tooltipPrefix="$"
        />
      </Styled.FilterItem>
      <Accordion title="CUSTOMER REVIEWS">
        {Array.from({ length: 4 }).map((_, idx, arr) => (
          <RatingFilterItem count={arr.length - idx} />
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
