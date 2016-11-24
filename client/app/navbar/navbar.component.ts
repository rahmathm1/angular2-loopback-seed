import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav.navbar',
    templateUrl: 'navbar.component.html',
    host: { 'class': 'navbar-default' }
})

export class NavbarComponent implements OnInit{
    constructor() { }

    ngOnInit() { }
}