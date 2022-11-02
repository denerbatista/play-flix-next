import { AxiosResponse } from "axios";
import { IUpdateUser, IUserService } from "../../interfaces/User";
import { TUser } from "../../types/User";
import { api } from "../api";

class UserService implements IUserService {
  async getAll(): Promise<TUser> {
    const response: AxiosResponse = await api.get("/api/account/user");

    return response.data;
  }

  async delete(idUser: string): Promise<boolean> {
    const response: AxiosResponse = await api.delete(
      `/api/account/user/${idUser}`
    );
    const confirmation: boolean = response.status === 200;

    return confirmation;
  }

  async update(idUser: string, updatedUser: IUpdateUser): Promise<boolean> {
    const response: AxiosResponse = await api.patch(
      `/api/account/user/${idUser}`,
      updatedUser
    );
    const confirmation: boolean = response.status == 200;

    return confirmation;
  }
}

export default UserService;
