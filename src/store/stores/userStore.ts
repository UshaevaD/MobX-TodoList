import { observable } from 'mobx';
import { IRootStore } from './rootStore';

export interface IUser {
  id: string;
  name: string;
  avatar?: string;
}

export interface IUserStore {
  user: IUser | null;
}

export class UserStore implements IUserStore {
  private rootStore: IRootStore;
  
  @observable user = null;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }
}