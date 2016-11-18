import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import { Todo } from '../todo/todo.model';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: [ 'todos.component.css' ]
})

export class TodosComponent implements OnInit {
    
    private todoService         : TodoService;
    private todos               : Todo[];
    private message             : string;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.todoService.getAll().subscribe(
            response => this.todos = response.json(),
            response => this.message = <any>response);
    }

    deleteTodo(todo: Todo) {
        this.todoService.delete(todo).subscribe(
            response => {
                this.getTodos();
            },
            response => this.message = <any>response);
    }

    updateTodo(todo: Todo) {
        this.todoService.update(todo).subscribe(
            response => {
                this.getTodos();
            },
            response => this.message = <any>response);
    }

    showMessage(type: number, message: string) {

    }
}