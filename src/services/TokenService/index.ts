import { ITokenService } from "../../interfaces/Token";
import { TGetToken } from "../../types/Token";

class TokenService implements ITokenService {
  saveToken(token: string): void {
    localStorage.setItem("Authorization", JSON.stringify(token));
  }

  getToken(): TGetToken {
    const token = localStorage.getItem("Authorization");

    return token ? token : undefined;
  }

  clearToken(): void {
    localStorage.clear();
  }
}

export default TokenService;
