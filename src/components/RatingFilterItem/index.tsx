import React, { FC } from "react";
import Styled from "./styled";
import { Rating } from "react-simple-star-rating";

type TRatingFilterItem = {
  count: number;
  onClick: (val: number) => void;
};

const RatingFilterItem: FC<TRatingFilterItem> = ({ count, onClick }) => {
  return (
    <Styled.RatingWrapper onClick={() => onClick(count)}>
      <Styled.RatingContainer>
        <Rating readonly iconsCount={count} size={17} initialValue={count} />
      </Styled.RatingContainer>
      <Styled.Text>& Up</Styled.Text>
    </Styled.RatingWrapper>
  );
};

export default RatingFilterItem;
