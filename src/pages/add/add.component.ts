import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList, TodoListItem } from "../../models";
import { NavParams, DateTime } from "ionic-angular";

@Component({
  selector: "add-page",
  templateUrl: "add.component.html"
})
export class addPage {
  todoList: TodoList = new TodoList("");
  itemName: string = "";
  constructor(public todoService: TodoService, private navParams: NavParams) {
    this.todoList.title = this.navParams.get("title");
    if (this.navParams.get("todoList")) {
      this.todoList = this.navParams.get("todoList");
    } else {
      this.todoService.addList(this.todoList);
    }
  }

  addItem() {
    if (this.itemName.length === 0) return;
    const newItem = new TodoListItem(this.itemName);
    this.todoList.items.push(newItem);
    this.todoService.saveStorage();
    this.itemName = "";
  }
  deleteItem(index: number) {
    if (this.todoList.items.length > 0) {
      this.todoList.items.splice(index, 1);
      this.todoService.saveStorage();
    }
  }
  updateItem(item: TodoListItem) {
    item.completed = !item.completed;
    this.setTodoCompletion();
    console.log(this.todoList);
    this.todoService.saveStorage();
  }
  setTodoCompletion() {
    const pending = this.todoList.items.filter(item => {
      return !item.completed;
    }).length;
    if (pending === 0) {
      this.todoList.completed = true;
      this.todoList.completedOn = new Date();
    } else {
      this.todoList.completed = false;
      this.todoList.completedOn=null;
    }
  }
}
