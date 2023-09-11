import styled from "@emotion/styled";
import { MAIN_SECTION_GAP, SIDEBAR_WIDTH } from "../../constants/styles";

const Wrapper = styled("header")``;

const Container = styled("div")`
  max-width: min(1400px, calc(100% - 24px));
  margin-inline: auto;

  display: flex;
  align-items: center;
  gap: ${MAIN_SECTION_GAP};
`;

const LogoWrapper = styled("div")`
  width: ${SIDEBAR_WIDTH};
`;

const ActionsWrapper = styled("div")`
  display: flex;
  gap: 8px;

  margin-inline: auto 0;
`;

const LoginButton = styled("button")`
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.primary[70]};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.primary[70]};

  padding: 8px 16px;

  font-size: 20px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  cursor: pointer;

  transition: color, background 0.25s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.basic.white};
    background-color: ${({ theme }) => theme.colors.primary[70]};
  }
`;

const SignUpButton = styled("button")`
  background-color: transparent;

  border: 1px solid transparent;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.basic.white};
  background-color: ${({ theme }) => theme.colors.primary[70]};

  padding: 8px 16px;

  font-size: 20px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  cursor: pointer;

  transition: color, background 0.25s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[70]};
    border: 1px solid ${({ theme }) => theme.colors.primary[70]};
  }
`;

const Styled = {
  Wrapper,
  Container,
  LogoWrapper,
  ActionsWrapper,
  LoginButton,
  SignUpButton,
};

export default Styled;
