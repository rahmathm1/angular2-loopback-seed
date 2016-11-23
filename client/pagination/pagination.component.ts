import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pagination',
    templateUrl: 'pagination.component.html'
})

export class PaginationComponent implements OnInit{

    private pages: number[];    
    
    @Input('page-size') pageSize: number = 10;
    @Output() showPage: EventEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        this.pages = new Array(this.pageSize);
    }

    show(pageNumber: number) {
        this.showPage.emit(pageNumber);
        //console.log("Show page :" + pageNumber);
    }
}