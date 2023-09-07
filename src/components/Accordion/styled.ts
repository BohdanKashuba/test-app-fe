import styled from "@emotion/styled";

const Wrapper = styled("div")`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[5]};
`;

const Heading = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 700;
`;

const CollapseButton = styled("button")`
  padding: 0;

  display: flex;
  align-items: center;

  border: none;

  background-color: transparent;

  cursor: pointer;
`;

const ContentWrapper = styled("div")`
  margin-top: 5px;
  margin-bottom: 10px;

  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const Styled = { Heading, CollapseButton, ContentWrapper, Wrapper };

export default Styled;
