import { AxiosResponse } from "axios";
import { IUpdateUser, IUser, IUserService } from "../../interfaces/User";
import { TUser } from "../../types/User";
import { api } from "../api";

class UserService implements IUserService {
  async getAll(): Promise<TUser> {
    const response: AxiosResponse = await api.get("users");
    
    return response.data;
  }
  
  saveUser(user: IUser): void {
    localStorage.setItem("UserLogged", JSON.stringify(user));
  }
  
  async delete(idUser: string): Promise<boolean> {
    const response: AxiosResponse = await api.delete(
      `users/${idUser}`
    );
    const confirmation: boolean = response.status === 200;

    return confirmation;
  }

  async update(idUser: string, updatedUser: IUpdateUser): Promise<boolean> {
    const response: AxiosResponse = await api.patch(
      `users/${idUser}`,
      updatedUser
    );
    const confirmation: boolean = response.status == 200;

    return confirmation;
  }
}

export default UserService;
