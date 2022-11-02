import { IAuthorization, IError } from "../../interfaces/Auth";

export type TAuthorization = IAuthorization | IError;

export type TRegisterUser = boolean | TAuthorization;