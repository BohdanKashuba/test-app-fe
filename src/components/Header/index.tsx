import React, { ChangeEvent, FC, useCallback, useState } from "react";
import Styled from "./styled";
import Image from "../Image";
import Logo from "../../assets/images/logo.png";
import SearchInput from "../SearchInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilter } from "../../store/slices/filter.slice";
import { filterSelector, userIsAuthSelector } from "../../store/selectors";
import Modal from "../Modal";
import LoginForm from "./components/LoginForm";
import AuthenticatedUser from "./components/AuthenticatedUser";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filterSelector);
  const isAuth = useAppSelector(userIsAuthSelector);

  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), [setOpen]);
  const onOpen = useCallback(() => setOpen(true), [setOpen]);

  const reset = () => {
    dispatch(setFilter({ keywords: "" }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ keywords: e.target.value }));
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LogoWrapper>
          <Image src={Logo} alt="logo" />
        </Styled.LogoWrapper>
        <SearchInput
          onClear={reset}
          onChange={onChange}
          value={filters.keywords}
        />
        <Styled.ActionsWrapper>
          {isAuth ? (
            <AuthenticatedUser />
          ) : (
            <>
              <Styled.LoginButton onClick={onOpen}>Login</Styled.LoginButton>
              <Modal open={open} onClose={onClose} title="Login">
                <LoginForm />
              </Modal>
            </>
          )}
        </Styled.ActionsWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
