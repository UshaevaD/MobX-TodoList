import { observable } from "mobx";
import { IRootStore } from "./rootStore";

export interface IAuthStore {
  token: string | null,
  isAuth: Boolean,
  isRegister: Boolean 
}

export class AuthStore implements IAuthStore  {
  private rootStore: IRootStore;
  
  @observable token = null;
  @observable isAuth = false;
  @observable isRegister = false;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }
}


// @observable protected _accessToken: Maybe<string> = null;
// @computed public get accessToken(): Maybe<string> {
//   return this._accessToken;
// }
// public set accessToken(v: Maybe<string>) {
//   this._accessToken = v;
// }