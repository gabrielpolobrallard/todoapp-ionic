import { Injectable } from "@angular/core";
import { TodoList } from "../models";

@Injectable()
export class TodoService {
  todoLists: TodoList[] = [];

  constructor() {
    console.log("Todo Service Initialized");
    const todo1 = new TodoList("Lista 1");
    const todo2 = new TodoList("Lista 2");

    this.todoLists.push(todo1, todo2);
    console.log(this.todoLists);
  }
}
