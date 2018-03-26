import { Component } from '@angular/core';

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

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onAdding(newItem) {
    console.log('herrrrrrrr');
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

}
