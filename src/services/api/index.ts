import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL as string;

export const api: AxiosInstance = axios.create({ baseURL });
