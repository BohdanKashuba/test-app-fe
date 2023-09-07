import React, { FC } from "react";
import Sidebar from "./components/Sidebar";
import Styled from "./styled";

const Home: FC = () => {
  return (
    <Styled.Main>
      <Sidebar />
    </Styled.Main>
  );
};

export default Home;
