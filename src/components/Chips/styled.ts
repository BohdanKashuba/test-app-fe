import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Label = styled("span")`
  color: ${({ theme }) => theme.colors.gray[100]};

  font-weight: 500;
  font-size: 14px;
`;

const Styled = { Wrapper, Container, Label };

export default Styled;
