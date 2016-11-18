import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { Todo } from '../todo/todo.model';
import { TodoService } from '../todo/todo.service';

@Component({
    moduleId: module.id,
    selector: 'new-todo',
    templateUrl: 'new-todo.component.html' 
})

export class NewTodoComponent implements OnInit {

    private todo            : Todo;
    private createForm      : FormGroup;
    private todoService     : TodoService;
    private router          : Router;


    constructor(todoService: TodoService, router: Router) {
        this.todoService = todoService; 
        this.router = router;
        this.todo = new Todo();
        this.createForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            status: new FormControl(false)
        });
    }

    ngOnInit() { }

    saveTodo() {
        this.todoService.create(this.todo).subscribe(
            response => {
                this.router.navigate(['/todos/all']);
            },
            error => console.log(error)
        );
        
    }
}