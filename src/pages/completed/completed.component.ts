import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList } from "../../models";

@Component({
  selector: "completed-page",
  templateUrl: "completed.component.html"
})
export class CompletedPage {
  completedList: TodoList[] = [];
  constructor(public todoService: TodoService) {

  }
}
