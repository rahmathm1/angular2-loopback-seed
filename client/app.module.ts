import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { routerConfig } from './router-config';

import { PreventDefaultDirective } from './shared/prevent-default.directive';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';

import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './todos/new.component';
import { TodoDetailsComponent } from './todos/details.component';
import { TodoSummaryComponent } from './todos/summary.component';

import { TodoService } from './todos/todo.service';

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routerConfig, { useHash: true }),
    ReactiveFormsModule,
    FormsModule,
    HttpModule 
  ],
  declarations: [
    PreventDefaultDirective, 
    AppComponent, 
    NavbarComponent,
    PaginationComponent,
    TodosComponent,
    NewTodoComponent,
    TodoDetailsComponent,
    TodoSummaryComponent 
  ],
  providers: [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
