import { Injectable } from "@angular/core";
import { TodoList } from "../models";

@Injectable()
export class TodoService {
  todoLists: TodoList[] = [];

  constructor() {
    console.log("Todo Service Initialized");
    this.loadStorage();
  }

  addList(todoList: TodoList) {
    this.todoLists.push(todoList);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem("data", JSON.stringify(this.todoLists));
  }

  loadStorage() {
    if (localStorage.getItem("data")) {
      this.todoLists = JSON.parse(localStorage.getItem("data"));
    }
  }
}
