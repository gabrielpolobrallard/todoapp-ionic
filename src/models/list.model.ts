import { TodoListItem } from "./list-item.model";



export class TodoList {

  id:number;
  title:string;
  createdOn:Date;
  completedOn:Date;
  completed:boolean;
  items:TodoListItem[];


  constructor( title:string) {
    this.title = title;
    this.completed = false;
    this.createdOn = new Date();
    this.items = [];
    //using this for avoid generate custom id
    this.id= new Date().getTime();

  }
}
