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
  }

  addItem(){
    if ( this.itemName.length===0) return;
    const newItem = new TodoListItem(this.itemName);
    this.todoList.items.push(newItem);
    console.log(this.todoList.items);
  }
}
