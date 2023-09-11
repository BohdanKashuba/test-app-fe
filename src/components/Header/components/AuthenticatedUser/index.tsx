import React, { FC } from "react";
import { useAppSelector } from "../../../../store/hooks";
import { userSelector } from "../../../../store/selectors";
import Styled from "./styled";

const AuthenticatedUser: FC = () => {
  const user = useAppSelector(userSelector);

  if (!user.isAuth) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <Styled.WatchesButton value={5}>Watches</Styled.WatchesButton>
      <Styled.Avatar>{user.name.substring(0, 1)}</Styled.Avatar>
    </Styled.Wrapper>
  );
};

export default AuthenticatedUser;
