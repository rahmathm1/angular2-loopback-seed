import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pagination',
    templateUrl: 'pagination.component.html'
})

export class PaginationComponent implements OnInit, OnChanges{

    private pages: number[];    
    private activePageNumber: number = 1;
    
    @Input('page-size') pageSize: number = 10;
    @Input('total-count') totalCount: number;
    @Output() showPage: EventEmitter = new EventEmitter();

    constructor() { }

    ngOnInit() {
        
    }

    ngOnChanges() {
        this.pages = new Array(this.getPageCount());
    }

    show(pageNumber: number) {
        this.activePageNumber = pageNumber;
        this.showPage.emit(pageNumber);
    }

    /** Private methods */
    getPageCount(): number {
        return (parseInt((this.totalCount / this.pageSize).toString())+1);
    }
}