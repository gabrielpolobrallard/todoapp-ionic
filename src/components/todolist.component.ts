import { addPage } from "./../pages/add/add.component";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { TodoService } from "./../services/todo.service";
import { Component, Input } from "@angular/core";
import { TodoList } from "../models";

@Component({
  selector: "app-todolist",
  templateUrl: "todolist.component.html"
})
export class TodoListComponent {
  @Input() showCompleted: boolean = false;
  constructor(
    public todoService: TodoService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}
  listSelected(selectedList: TodoList) {
    this.navCtrl.push(addPage, {
      title: selectedList.title,
      todoList: selectedList
    });
  }
  deleteList(id: number, slidingItem: ItemSliding) {
    this.todoService.deleteList(id);
    slidingItem.close();
  }
  editList(item: TodoList, slidingItem: ItemSliding) {
    slidingItem.close();
    const alert = this.alertCtrl.create({
      title: "Edit To Do List",
      message: "Enter the new name for this list",
      inputs: [
        {
          name: "title",
          placeholder: "Enter new name",
          value: item.title
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Canceled");
          }
        },
        {
          text: "Save Edition",
          handler: data => {
            if (data.title.length === 0) return;
            item.title = data.title;
            this.todoService.saveStorage();
          }
        }
      ]
    });
    alert.present();
  }
}
