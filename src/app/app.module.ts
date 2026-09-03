import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
 import{MatIconModule} from "@angular/material/icon";
  import { MatButtonModule } from '@angular/material/button';
  import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
     MatSnackBarModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
