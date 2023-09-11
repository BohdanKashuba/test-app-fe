export type TUserData = {
  id: string;
  name: string;
  email: string;
};

type TAuthUser = {
  isAuth: true;
} & TUserData;

type TUnauthUser = {
  isAuth: false;
};

export type TUser = TAuthUser | TUnauthUser;
