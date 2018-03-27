import { Component } from '@angular/core';
import {random} from 'lodash';
// declare let _: any;

@Component({
  // this is a CSS selector
  selector: 'app-root',
  // this file below hold the content of whatever this selector found
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-essentials';
  rootName = 'Quang Nguyen';
  rootItems = ['Apple', ' Banana', ' Orange'];
  number = 1;

  onIncrease() {
    // this.number = this.number * 2;
    this.number = random(1, 10);
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onAdding(newItem) {
    console.log('herrrrrrrr');
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

}
