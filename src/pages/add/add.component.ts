import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList, TodoListItem } from "../../models";
import { NavParams } from "ionic-angular";

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
    this.todoService.saveStorage();
  }
}
