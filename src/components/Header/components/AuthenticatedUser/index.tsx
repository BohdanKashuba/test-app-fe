import React, { FC, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../../store/hooks";
import { userSelector, watchesSelector } from "../../../../store/selectors";
import Styled from "./styled";
import Modal from "../../../Modal";
import ProductCard from "../../../../pages/Home/components/Products/components/ProductCard";
import { useLogoutMutation } from "../../../../store/api/auth";

const AuthenticatedUser: FC = () => {
  const user = useAppSelector(userSelector);
  const watches = useAppSelector(watchesSelector);

  const [logout] = useLogoutMutation();

  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => setOpen((prev) => !prev), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (!user.isAuth) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <Styled.WatchesButton value={watches.length} onClick={onOpen}>
        Watches
      </Styled.WatchesButton>
      <Styled.LogoutButton onClick={onLogout}>Logout</Styled.LogoutButton>
      <Styled.Avatar>{user.name.substring(0, 1)}</Styled.Avatar>
      <Modal open={open} onClose={onClose} title="Watches">
        {watches.length ? (
          <Styled.WatchesWrapper>
            {watches.map((w) => (
              <ProductCard data={w} />
            ))}
          </Styled.WatchesWrapper>
        ) : (
          "No watches"
        )}
      </Modal>
    </Styled.Wrapper>
  );
};

export default AuthenticatedUser;
