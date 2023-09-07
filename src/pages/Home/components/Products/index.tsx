import React, { FC } from "react";
import Styled from "./styled";
import ProductsList from "./components/ProductsList";

const Products: FC = () => {
  return (
    <Styled.Wrapper>
      <ProductsList />
    </Styled.Wrapper>
  );
};

export default Products;
