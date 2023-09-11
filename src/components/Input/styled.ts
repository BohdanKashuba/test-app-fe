import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled("input")`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.basic.black};

  padding: 4px 8px;

  font-size: 14px;

  outline: none;
`;

const Label = styled("label")`
  font-size: 12px;
`;

const ErrorMessage = styled("span")`
  font-size: 12px;

  color: red;
`;

const Styled = { Input, Label, Wrapper, ErrorMessage };

export default Styled;
