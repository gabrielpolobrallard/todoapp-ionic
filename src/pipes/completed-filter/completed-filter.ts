import { TodoList } from "./../../models/list.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "completedFilter",
  pure:false
})
export class CompletedFilterPipe implements PipeTransform {
  transform(todoLists: TodoList[], completed: boolean) {
    return todoLists.filter(list => {
      return list.completed === completed;
    });
  }
}
