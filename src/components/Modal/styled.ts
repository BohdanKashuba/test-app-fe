import styled from "@emotion/styled";

const Wrapper = styled("div")`
  position: absolute;
  inset: 0;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.basic.black}80;

  display: flex;
  align-items: center;
`;

const Container = styled("div")`
  max-width: min(1400px, calc(100% - 60px));
  min-width: 350px;

  margin-inline: auto;

  background-color: ${({ theme }) => theme.colors.basic.white};

  padding: 12px 24px;

  border-radius: 8px;
`;

const Heading = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  margin-bottom: 30px;

  span {
    font-size: 24px;
  }
`;

const CloseButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background-color: transparent;

  cursor: pointer;
`;

const Styled = { Wrapper, Container, Heading, CloseButton };

export default Styled;
