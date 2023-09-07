import styled from "@emotion/styled";

const Wrapper = styled("fieldset")`
  width: fit-content;
  min-width: 100px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[60]};

  padding: 6px 8px 10px 12px;

  position: relative;
`;

const Label = styled("legend")`
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.gray[50]};

  padding: 0 2px;
`;

const Container = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: -6px;

  svg {
    color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

const Value = styled("span")``;

const DropdownWrapper = styled("div")`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;

  width: fit-content;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[60]};

  padding: 6px 12px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DropdownItem = styled("div")`
  cursor: pointer;
`;

const Styled = {
  Wrapper,
  Label,
  Container,
  Value,
  DropdownWrapper,
  DropdownItem,
};

export default Styled;
