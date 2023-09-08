import React, { ChangeEvent, FC } from "react";
import Styled from "./styled";
import Image from "../Image";
import Logo from "../../assets/images/logo.png";
import SearchInput from "../SearchInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilter } from "../../store/slices/filter.slice";
import { filterSelector } from "../../store/selectors";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filterSelector);

  const reset = () => {
    dispatch(setFilter({ keywords: "" }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ keywords: e.target.value }));
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LogoWrapper>
          <Image src={Logo} alt="logo" />
        </Styled.LogoWrapper>
        <SearchInput
          onClear={reset}
          onChange={onChange}
          value={filters.keywords}
        />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
