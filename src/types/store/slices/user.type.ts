export type TUserData = {
  id: string;
  name: string;
  email: string;
};

export type TAuthUser = {
  isAuth: true;
} & TUserData;

type TUnauthUser = {
  isAuth: false;
};

export type TUser = TAuthUser | TUnauthUser;
