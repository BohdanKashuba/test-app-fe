import React, { FC, useCallback } from "react";
import { TProduct } from "../../../../../../types/store/api/products.type";
import Styled from "./styled";
import { Rating } from "react-simple-star-rating";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../../../../../../store/hooks";
import {
  userSelector,
  watchesSelector,
} from "../../../../../../store/selectors";
import {
  useAddWatchMutation,
  useDeleteWatchMutation,
} from "../../../../../../store/api/watches";

type TProductCardProps = {
  data: TProduct;
};

const ProductCard: FC<TProductCardProps> = ({ data }) => {
  const user = useAppSelector(userSelector);
  const watches = useAppSelector(watchesSelector);

  const [connect] = useAddWatchMutation();
  const [disconnect] = useDeleteWatchMutation();

  const isSelected = watches.findIndex((w) => w.id === data.id) > -1;

  const watchHandler = (productId: string) => {
    if (!user.isAuth) {
      alert("To watch this product you need to authorize");
      return;
    }

    if (!user.id) {
      return;
    }

    if (isSelected) {
      disconnect({ productId, userId: user.id });
    } else {
      connect({ productId, userId: user.id });
    }
  };

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
        <Styled.WatchButton
          onClick={() => watchHandler(data.id)}
          selected={isSelected}
        >
          <AiOutlineHeart />
          <span>Watch</span>
        </Styled.WatchButton>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default ProductCard;
