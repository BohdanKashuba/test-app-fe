import React, { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import Styled from "./styled";
import { AiOutlineClose } from "react-icons/ai";

type TModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
} & PropsWithChildren;

const Modal: FC<TModalProps> = ({ open, onClose, title, children }) => {
  return createPortal(
    open && (
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Heading>
            <span>{title}</span>
            <Styled.CloseButton onClick={onClose}>
              <AiOutlineClose />
            </Styled.CloseButton>
          </Styled.Heading>
          {children}
        </Styled.Container>
      </Styled.Wrapper>
    ),
    document.body
  );
};

export default Modal;
