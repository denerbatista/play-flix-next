import { TUser } from "../../types/User";

export interface IUser {
  id: string;
  name: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin: boolean;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  isAdmin?: boolean;
}
export interface IUserService {
  getAll(): Promise<TUser>;
  update(idUser: string, updatedUser: IUpdateUser): Promise<boolean>;
  delete(idUser: string): Promise<boolean>;
}
