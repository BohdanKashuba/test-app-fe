import React, { FC, InputHTMLAttributes } from "react";
import Styled from "./styled";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

type TSearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onClear: () => void;
};

const SearchInput: FC<TSearchInputProps> = ({ onClear, ...rest }) => {
  return (
    <Styled.Wrapper>
      <AiOutlineSearch className="search-icon" />
      <Styled.Input {...rest} />
      <Styled.ClearButton>
        <AiOutlineClose className="clear-icon" />
      </Styled.ClearButton>
    </Styled.Wrapper>
  );
};

export default SearchInput;
