import styled from "@emotion/styled";

const TooltipWrapper = styled("div")<{ aligment: string }>`
  position: absolute;
  top: -30px;

  display: flex;
  align-items: center;
  gap: 2px;

  ${({ aligment }) => `${aligment}: 0px`}
`;

const Wrapper = styled("div")`
  height: 50px;

  display: flex;
  align-items: flex-end;

  padding-bottom: 10px;

  margin-inline: 10px;
`;

const Styled = { TooltipWrapper, Wrapper };

export default Styled;
