import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { routerConfig } from './router-config';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './todo/todo.service';

@NgModule({
  imports:      [ BrowserModule, 
                  RouterModule.forRoot(routerConfig, { useHash: true }),
                  ReactiveFormsModule,
                  FormsModule,
                  HttpModule ],
  declarations: [ AppComponent, 
                  NavbarComponent,
                  TodosComponent,
                  NewTodoComponent,
                  TodoComponent ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
