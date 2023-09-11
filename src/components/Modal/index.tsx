import React, { FC, PropsWithChildren, useRef } from "react";
import { createPortal } from "react-dom";
import Styled from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useOnClickOutside } from "usehooks-ts";

type TModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
} & PropsWithChildren;

const Modal: FC<TModalProps> = ({ open, onClose, title, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, onClose);

  return createPortal(
    open && (
      <Styled.Wrapper>
        <Styled.Container ref={ref}>
          <Styled.Heading>
            <span>{title}</span>
            <Styled.CloseButton onClick={onClose}>
              <AiOutlineClose />
            </Styled.CloseButton>
          </Styled.Heading>
          <Styled.Content>{children}</Styled.Content>
        </Styled.Container>
      </Styled.Wrapper>
    ),
    document.body
  );
};

export default Modal;
