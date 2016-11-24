import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

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
    private startPageNumber     : number;
    private pageSize            : number;
    private totalCount          : number;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
        this.startPageNumber = 1;
        this.pageSize = 5;
        this.totalCount = 0;
    }

    ngOnInit() {
        this.getTodos(this.startPageNumber);
        this.getTotalCount();
    }

    getTodos(pageNumber: number) {
        this.todoService.getAll(pageNumber, this.pageSize).subscribe(
            response => this.todos = response.json(),
            response => this.message = <any>response);
    }

    deleteTodo(todo: Todo) {
        this.todoService.delete(todo).subscribe(
            response => {
                this.getTodos(this.startPageNumber);
            },
            response => this.message = <any>response);
    }

    updateTodo(todo: Todo, status: boolean) {
        todo.status = !todo.status;
        this.todoService.save(todo).subscribe(
            response => {
                this.getTodos(this.startPageNumber);
            },
            response => this.message = <any>response);
    }

    getTotalCount(): void {
        this.todoService.getCount().subscribe(
            response => {
                debugger;
                this.totalCount = response.json().count
            },
            response => this.message = <any>response);
    }

    showMessage(type: number, message: string) {

    }
}