import styled from "@emotion/styled";

const Wrapper = styled("div")`
  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors.gray[5]};

  padding: 8px 12px;

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 20px;

  & > .search-icon {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

const Input = styled("input")`
  border: none;

  background-color: transparent;

  outline: none;
`;

const ClearButton = styled("button")`
  padding: 0;

  border: none;

  display: flex;
  align-items: center;

  & > .clear-icon {
    color: ${({ theme }) => theme.colors.primary[60]};

    cursor: pointer;
  }
`;

const Styled = {
  Wrapper,
  Input,
  ClearButton,
};

export default Styled;
