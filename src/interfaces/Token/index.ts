import { TGetToken } from "../../types/Token";

export interface ITokenService {
  saveToken(token: string): void;
  getToken(): TGetToken;
  clearToken(): void;
}
