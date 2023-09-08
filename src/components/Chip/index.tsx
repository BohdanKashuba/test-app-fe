import React, { FC } from "react";
import Styled from "./styled";

export type TChipProps = {
  label: string;
  id: string;
  onClick?: (id: string) => void;
  selected?: boolean;
};

const Chip: FC<TChipProps> = ({ id, label, onClick, selected }) => {
  return (
    <Styled.Wrapper onClick={() => onClick?.(id)} selected={selected ?? false}>
      {label}
    </Styled.Wrapper>
  );
};

export default Chip;
