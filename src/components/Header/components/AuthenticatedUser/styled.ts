import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Avatar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.primary[60]};
  color: ${({ theme }) => theme.colors.basic.white};

  border-radius: 100px;
`;

const WatchesButton = styled("button")<{ value: number }>`
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.primary[70]};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.primary[70]};

  padding: 8px 12px;

  font-size: 20px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  cursor: pointer;

  position: relative;

  &:before {
    content: "${({ value }) => value}";
    position: absolute;
    right: 0;
    top: 0;

    width: 20px;
    height: 20px;

    transform: translate(50%, -50%);

    color: #fff;

    font-size: 14px;

    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.error[60]};
  }
`;

const Styled = { Wrapper, Avatar, WatchesButton };

export default Styled;
