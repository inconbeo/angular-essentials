import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  // this is event binding((input)) and property binding [value]
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name" />
  <!-- <input type="text" [(ngModel)]="name" /> -->
  <p>Hello! {{name}}</p>
  <p>I am the user component!!!!</p>
  <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  // using Input method to turn it into settable property
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
