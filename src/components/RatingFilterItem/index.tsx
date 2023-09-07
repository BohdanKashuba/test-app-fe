import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import Styled from "./styled";

type TRatingFilterItem = {
  count: number;
};

const RatingFilterItem: FC<TRatingFilterItem> = ({ count }) => {
  return (
    <Styled.RatingWrapper>
      <Styled.RatingContainer>
        {Array.from({ length: count }).map(() => (
          <AiFillStar color="orange" size={17} />
        ))}
      </Styled.RatingContainer>
      <Styled.Text>& Up</Styled.Text>
    </Styled.RatingWrapper>
  );
};

export default RatingFilterItem;
