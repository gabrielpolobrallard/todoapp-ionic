import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { addPage } from "../add/add.component";

@Component({
  selector: "page-todo",
  templateUrl: "todo.component.html"
})
export class TodoPage {
  constructor(
    public todoService: TodoService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  listSelected(selectedList: TodoList) {
    console.log(selectedList);
  }
  addList() {
    const alert = this.alertCtrl.create({
      title: "New List",
      message: "Enter the name for the new To do List",
      inputs: [
        {
          name: "title",
          placeholder: "Enter To Do List Name"
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
          text: "Save",
          handler: data => {
            if (data.title.length !== 0) {
              this.navCtrl.push(addPage, {
                title: data.title
              });
            }
          }
        }
      ]
    });
    alert.present();
    // this.navCtrl.push(addPage);
  }
}
