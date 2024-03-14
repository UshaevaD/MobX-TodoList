import { action, observable, runInAction } from "mobx";
import { IRootStore } from "./rootStore";
import { AuthorizationAPI } from "../../api/AuthorizationAPI";
import { ILoginUser, IRegisterUser } from "../../types/auth.types";

export interface IAuthStore {
  token: string;
  isAuth: Boolean;
}

export class AuthStore implements IAuthStore {
  private rootStore: IRootStore;

  @observable token = '';
  @observable isAuth = false;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }

  @action
  setIsAuth() {
    this.isAuth = true;
  }

  @action
  setToken(token: string) {
    this.token = token || '';
  }

  async register(user: IRegisterUser) {
    try {
      const response = await AuthorizationAPI.registration(user);

      console.log("response ", response);
    } catch (error) {
      console.error(error);
    }
  }

  async login(user: ILoginUser) {
    try {
      const token = await AuthorizationAPI.login(user);

      runInAction(() => {
        this.setToken(token);
      });
    } catch (error) {
      console.log('error ', error)
      runInAction(() => {
        this.setToken('');
      });
    }
  }
}

// @observable protected _accessToken: Maybe<string> = null;
// @computed public get accessToken(): Maybe<string> {
//   return this._accessToken;
// }
// public set accessToken(v: Maybe<string>) {
//   this._accessToken = v;
// }
