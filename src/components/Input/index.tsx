import React, {
  FC,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import Styled from "./styled";

type TInputProps = {
  label?: string;
  id: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<TInputProps> = forwardRef(
  ({ label, id, error, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Styled.Wrapper>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
        <Styled.Input id={id} {...rest} ref={ref} />
        <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
      </Styled.Wrapper>
    );
  }
);

export default Input;
