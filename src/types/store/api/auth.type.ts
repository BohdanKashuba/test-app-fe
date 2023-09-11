import { TUserData } from "../slices/user.type";

export type TLogin = {
  email: string;
  password: string;
};

export type TAuthResponse = {
  user: TUserData;
  accessToken: string;
};
