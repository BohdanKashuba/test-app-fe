import styled from "@emotion/styled";

const Wrapper = styled("button")<{ selected: boolean }>`
  padding: 6px 12px;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.gray[10] : theme.colors.gray[5]};
  color: ${({ theme }) => theme.colors.gray[70]};

  border: none;

  border-radius: 100px;

  cursor: pointer;
`;

const Styled = { Wrapper };

export default Styled;
