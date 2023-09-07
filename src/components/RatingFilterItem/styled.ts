import styled from "@emotion/styled";

const RatingWrapper = styled("button")`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[5]};

  padding: 10px 12px 10px 10px;

  gap: 4px;

  font-size: 14px;

  border-radius: 8px;

  width: fit-content;

  border: none;

  cursor: pointer;
`;

const RatingContainer = styled("div")`
  display: flex;
  align-items: center;
`;

const Text = styled("div")`
  font-size: 12px;
`;

const Styled = { RatingWrapper, RatingContainer, Text };

export default Styled;
