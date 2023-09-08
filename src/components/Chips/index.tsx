import React, { FC } from "react";
import Chip, { TChipProps } from "../Chip";
import Styled from "./styled";

type TChipsProps = {
  items: Omit<TChipProps, "onClick">[];
  onSelect?: (id: string) => void;
  title: string;
  selected: string[];
};

const Chips: FC<TChipsProps> = ({ items, onSelect, title, selected }) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{title}</Styled.Label>
      <Styled.Container>
        {items.map((item) => (
          <Chip
            {...item}
            key={item.id}
            onClick={onSelect}
            selected={selected.findIndex((i) => i === item.id) > -1}
          />
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Chips;
