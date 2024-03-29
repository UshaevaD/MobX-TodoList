import axios, { Method, AxiosResponse } from "axios";
import { getCookie } from "../../utils/cookies";

console.log("process.env.BASE_URL ", process.env.REACT_APP_BASE_URL);

export const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const request = <T>(
  url: string,
  params: any,
  data?: T,
  method: Method = "GET",
  isAuth: boolean = true
): Promise<AxiosResponse<T>> => {
  const token = getCookie("tkn");
  const headers = {
    Authorization: isAuth ? `Bearer ${token}` : "",
  };

  return api.request<T>({
    method,
    url,
    params,
    data,
    headers,
  });
};

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

interface Request {
  url: string;
  method?: string;
  body?:
    | { token: number | string }
    | FormData
    | Record<string, string | number | boolean | null>
    | Record<string, any>;
  tkn?: string | null;
  currentLanguage?: string;
  options?: any;
  withoutAuthorization?: boolean;
  params?: Record<string, string | number>;
  withoutLanguage?: boolean;
}
