import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav',
    templateUrl: 'navbar.component.html',
    host: { 'class': 'navbar navbar-default' }
})

export class NavbarComponent implements OnInit{
    constructor() { }

    ngOnInit() { }
}