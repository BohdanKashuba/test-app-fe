import React, { FC } from "react";
import Sidebar from "./components/Sidebar";
import Styled from "./styled";
import Products from "./components/Products";

const Home: FC = () => {
  return (
    <Styled.Main>
      <Sidebar />
      <Products />
    </Styled.Main>
  );
};

export default Home;
