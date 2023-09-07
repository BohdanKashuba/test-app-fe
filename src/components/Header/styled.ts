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

const Styled = {
  Wrapper,
  Container,
  LogoWrapper,
};

export default Styled;
