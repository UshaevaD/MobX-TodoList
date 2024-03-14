import { IRegisterUser } from "../types/common.type";
import { deleteCookie, setCookie } from "../utils/cookies";
import { request } from "./configs/axiosConfig";

export interface IBody {
  accessToken: string
}

export const AuthorizationAPI = {
  registration: async function (user: IRegisterUser) {
    const response = await request("/register", {}, user, "POST", false);
    return response.data;
  },

  login: async function (user: any) {
    const response = await request<IBody>("/login",  {}, user, "POST", false);

    const token = response.data.accessToken;
    setCookie("tkn", token);

    return response.data;
  },

  logout: function () {
    deleteCookie("tkn");
  },
};
