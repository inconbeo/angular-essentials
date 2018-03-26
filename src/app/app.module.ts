import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponent } from './cart/cart.component';


// this file tell which specific features my application is using

@NgModule({
  // we have to declares components that we add to our projects
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // This is the component that can be found in the index.html file,
  // Angular wont scan index.html file for our component as it only look into our component template
  bootstrap: [AppComponent]
})
export class AppModule { }
