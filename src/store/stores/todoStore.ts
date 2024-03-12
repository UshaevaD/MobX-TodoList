import { IRootStore } from './rootStore'

import { makeAutoObservable, observable } from "mobx";

export interface ITodo {
  id: string;
  name: string;
  done: boolean;
}

export interface ITodoStore {
  todos: ITodo[];
}

export class TodoStore implements ITodoStore {
  private rootStore: IRootStore;
  
  @observable todos = [];
  @observable isLoading = true;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    this.loadTodos();
  }

  loadTodos() {
    
  }

}