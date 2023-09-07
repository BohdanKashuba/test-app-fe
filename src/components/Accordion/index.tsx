import React, { FC, PropsWithChildren, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Styled from "./styled";

type TAccordionProps = { title: string } & PropsWithChildren;

const Accordion: FC<TAccordionProps> = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.Heading>
        <span>{title}</span>
        <Styled.CollapseButton onClick={() => setOpen((prev) => !prev)}>
          <RiArrowDropDownLine size={30} />
        </Styled.CollapseButton>
      </Styled.Heading>
      {open && <Styled.ContentWrapper>{children}</Styled.ContentWrapper>}
    </Styled.Wrapper>
  );
};

export default Accordion;
