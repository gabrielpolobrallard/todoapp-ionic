import { CompletedPage } from './../completed/completed.component';
import { TodoPage } from './../todo/todo.component';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodoPage;
  tab2Root = CompletedPage;

  constructor() {

  }
}
