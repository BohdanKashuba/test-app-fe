import styled from "@emotion/styled";

const AuthSubmitButton = styled("button")`
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.primary[70]};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.primary[70]};

  padding: 8px 16px;

  margin-top: 12px;

  font-size: 16px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  cursor: pointer;

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

const AuthForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  & > :not(button) {
    width: 100%;
  }
`;

const Styled = { AuthForm, AuthSubmitButton };

export default Styled;
