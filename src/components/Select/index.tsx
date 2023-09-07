import React, { FC, useCallback, useRef, useState } from "react";
import Styled from "./styled";
import { MdArrowDropDown } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";

type TSelectProps = {
  label: string;
  onSelect?: (id: string) => void;
  options: { id: string; label: string }[];
  active?: string;
};

const Select: FC<TSelectProps> = ({ label, options, active, onSelect }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const onToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const value = options.find((opt) => opt.id === active);

  useOnClickOutside(ref, onClose);

  return (
    <Styled.Wrapper onClick={onToggle} ref={ref}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Container>
        <Styled.Value>{value?.label}</Styled.Value>
        <MdArrowDropDown size={24} />
      </Styled.Container>
      {open && (
        <Styled.DropdownWrapper>
          {options.map((opt) => (
            <Styled.DropdownItem
              key={opt.id}
              onClick={() => onSelect?.(opt.id)}
            >
              {opt.label}
            </Styled.DropdownItem>
          ))}
        </Styled.DropdownWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default Select;
