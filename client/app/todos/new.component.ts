import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
    moduleId: module.id,
    selector: 'new-todo',
    templateUrl: 'new.component.html' 
})

export class NewTodoComponent implements OnInit {

    private todo            : Todo;
    private createForm      : FormGroup;
    private todoService     : TodoService;
    private router          : Router;
    private pageMode        : string;
    private activatedRoute  : ActivatedRoute;
    private subscription    : Subscription;

    constructor(todoService: TodoService, router: Router, activatedRoute: ActivatedRoute) {
        this.todoService = todoService; 
        this.router = router;
        this.todo = new Todo();
        this.createForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            status: new FormControl(false)
        });
        this.activatedRoute =  activatedRoute;
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                let id = param['id'];
                this.pageMode = (id ? 'Edit' : 'New');
                if(id) this.getTodo(id);
        });
    }

    ngOnInit() { }

    getTodo(id: string) {
        this.todoService.get(id).subscribe(
            response => this.todo = response.json(),
            response => this.message = <any>response);
    }

    saveTodo() {
        this.todoService.save(this.todo).subscribe(
            response => {
                this.router.navigate(['/todos/all']);
            },
            error => console.log(error)
        );        
    }
}