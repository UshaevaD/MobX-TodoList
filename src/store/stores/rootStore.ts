import { AuthStore, IAuthStore } from "./authStore";
import { ITodoStore, TodoStore } from "./todoStore";
import { IUserStore, UserStore } from "./userStore";

export interface IRootStore {
  todoStore: ITodoStore;
  authStore: IAuthStore;
  userStore: IUserStore;
}

export class RootStore {
  todoStore: ITodoStore;
  authStore: IAuthStore;
  userStore: IUserStore;

  constructor() {
    this.todoStore = new TodoStore(this);
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
  }
}