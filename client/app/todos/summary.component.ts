import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'todo-summary',
    templateUrl: 'summary.component.html'
})

export class TodoSummaryComponent implements OnInit {
    
    private todoService         : TodoService;
    private totalCount          : number;
    private completedCount      : number;
    private openCount           : number;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
        this.totalCount = 0;
    }

    ngOnInit() {
        this.getTodoCounts(true, response => {
            this.totalCount += response.json().count;
            this.completedCount = response.json().count
        });
        this.getTodoCounts(false, response => {
            this.totalCount += response.json().count;
            this.openCount = response.json().count
        }); 
    }

    getTodoCounts(status: boolean, cb) {
        this.todoService.getCount(status).subscribe(cb);
    }
}