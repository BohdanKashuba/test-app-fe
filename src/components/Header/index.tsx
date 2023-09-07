import React, { FC } from "react";
import Styled from "./styled";
import Image from "../Image";
import Logo from "../../assets/images/logo.png";
import SearchInput from "../SearchInput";

const Header: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LogoWrapper>
          <Image src={Logo} alt="logo" />
        </Styled.LogoWrapper>
        <SearchInput onClear={() => {}} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
