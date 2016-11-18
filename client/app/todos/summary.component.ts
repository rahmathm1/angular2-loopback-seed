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
    private where               : any;
    private totalCount          : number;
    private completedCount      : number;
    private openCount           : number;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    ngOnInit() {
        this.getTodoCounts(true, response => this.completedCount = response.json().count);
        this.getTodoCounts(false, response => this.totalCount = response.json().count); 
    }

    getTodoCounts(status: boolean, cb) {
        this.where = {
            where: {
                status: status
            }
        };
        this.todoService.getCount(this.where).subscribe(cb);
    }
}