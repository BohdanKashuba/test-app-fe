import styled from "@emotion/styled";
import RootImage from "../../../../../../components/Image";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;

  border-radius: 4px;

  &:hover {
    box-shadow: 0px 2px 4px 0px #5a5b6a3d;
    box-shadow: 0px 1px 2px 0px #3a3a443d;
  }
`;

const Image = styled(RootImage)`
  height: 224px;

  object-fit: cover;
`;

const Title = styled("span")`
  font-size: 16px;
  line-height: 24px;
`;

const Description = styled("span")`
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.gray[50]};
`;

const Price = styled("span")`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RateWrapper = styled("div")`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  margin-top: 4px;
`;

const WatchButton = styled("button")<{ selected: boolean }>`
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.primary[70]};
  border-radius: 4px;

  color: ${({ theme, selected }) =>
    selected ? theme.colors.basic.white : theme.colors.primary[70]};

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary[70] : theme.colors.basic.white};

  padding: 4px 12px 4px 8px;

  font-size: 14px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  cursor: pointer;
`;

const Styled = {
  Wrapper,
  Image,
  Description,
  Price,
  RateWrapper,
  WatchButton,
  Container,
  Title,
};

export default Styled;
