import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'details.component.html' ,
    styleUrls: [ 'details.component.css' ]
})

export class TodoDetailsComponent implements OnInit {
    private todoService     : TodoService;
    private router          : Router;
    private activatedRoute  : ActivatedRoute;
    private todo            : Todo;
    private message         : string;
    private subscription    : Subscription;

    constructor(todoService: TodoService, router: Router, activatedRoute: ActivatedRoute) {
        this.todoService = todoService;
        this.router = router;
        this.todo = new Todo();
        this.activatedRoute =  activatedRoute;
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                let id = param['id'];
                this.getTodo(id);
        });
    }

    ngOnInit() { }

    getTodo(id: string) {
        this.todoService.get(id).subscribe(
            response => this.todo = response.json(),
            response => this.message = <any>response);
    }

    deleteTodo(todo: Todo) {
        this.todoService.delete(todo).subscribe(
            response => {
                this.router.navigate(['/todos/all']);
            },
            response => this.message = <any>response);
    }
}