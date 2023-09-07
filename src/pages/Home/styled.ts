import styled from "@emotion/styled";
import { MAIN_SECTION_GAP, SIDEBAR_WIDTH } from "../../constants/styles";

const Main = styled("main")`
  max-width: min(1400px, calc(100% - 24px));

  margin-inline: auto;
  margin-top: 52px;

  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  column-gap: ${MAIN_SECTION_GAP};
`;

const Styled = { Main };

export default Styled;
