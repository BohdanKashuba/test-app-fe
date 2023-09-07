import React, { FC } from "react";
import { TProduct } from "../../../../../../types/store/api/products.type";
import Styled from "./styled";
import { Rating } from "react-simple-star-rating";
import { AiOutlineHeart } from "react-icons/ai";

type TProductCardProps = {
  data: TProduct;
};

const ProductCard: FC<TProductCardProps> = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={process.env.REACT_APP_API_URL + "/" + data.image} />
      <Styled.Title>{data.name}</Styled.Title>
      <Styled.Price>${parseFloat(data.price).toFixed(2)}</Styled.Price>
      <Styled.Description>{data.description}</Styled.Description>
      <Styled.Container>
        <Styled.RateWrapper>
          {data.rate > 0 ? (
            <Rating
              iconsCount={Math.ceil(data.rate)}
              size={14}
              initialValue={data.rate}
              readonly
            />
          ) : (
            <Rating
              iconsCount={5}
              size={14}
              initialValue={data.rate}
              readonly
            />
          )}
          <span>{data.rate}</span>
        </Styled.RateWrapper>
        <Styled.WatchButton>
          <AiOutlineHeart />
          <span>Watch</span>
        </Styled.WatchButton>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default ProductCard;
