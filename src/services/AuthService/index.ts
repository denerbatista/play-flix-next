
import { IAuthService, IDatosLogin } from "../../interfaces/Auth";
import { INewUser } from "../../interfaces/User";
import { api } from "../../services/api";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import { TAuthorization, TRegisterUser } from "../../types/Auth";

const tokenService = new TokenService();
const userService = new UserService();

class AuthService implements IAuthService {
  async authentication(datosLogin: IDatosLogin): Promise<boolean | TAuthorization> {
    const response: TAuthorization = (await api.post("/auth/login", datosLogin))
      .data;

    if (response.token) {
      tokenService.saveToken(response.token);
      userService.saveUser(response.user);
    }

    return response.token ? true : response;
  }

  async registerUser(newUser: INewUser): Promise<TRegisterUser> {
    const response = await api.post("/users", newUser);

    if (response.status !== 400) {
      const login = await this.authentication({
        email: newUser.email,
        password: newUser.password
      });

      return login
    }

    return response.data;
  }

  logout(): void {
    tokenService.clearToken();
  }
}

export default AuthService;
