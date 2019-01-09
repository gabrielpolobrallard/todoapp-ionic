import { Component } from '@angular/core';

@Component({
  selector: 'lists',
  templateUrl: 'lists.html'
})
export class ListsComponent {

  text: string;

  constructor() {
    console.log('Hello ListsComponent Component');
    this.text = 'Hello World';
  }

}
