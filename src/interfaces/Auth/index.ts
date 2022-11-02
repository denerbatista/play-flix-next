import { TAuthorization, TRegisterUser } from "../../types/Auth";
import { INewUser, IUser } from "../User";
export interface IDatosLogin {
  email: string;
  password: string;
}

export interface IAuthorization {
  token: string;
  user: IUser;
}

export interface IError {
  statusCode: number;
  message: string | string[];
  error: string;
  token: undefined;
}


export interface IAuthService {
  authentication(datosLogin: IDatosLogin): Promise<boolean | TAuthorization>;
  registerUser(newUser: INewUser): Promise<TRegisterUser>;
  logout(): void;
}
