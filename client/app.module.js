"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require('@angular/http');
var router_config_1 = require('./router-config');
var prevent_default_directive_1 = require('./shared/prevent-default.directive');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var pagination_component_1 = require('./pagination/pagination.component');
var todos_component_1 = require('./todos/todos.component');
var new_component_1 = require('./todos/new.component');
var details_component_1 = require('./todos/details.component');
var summary_component_1 = require('./todos/summary.component');
var todo_service_1 = require('./todos/todo.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(router_config_1.routerConfig, { useHash: true }),
                forms_1.ReactiveFormsModule,
                forms_2.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                prevent_default_directive_1.PreventDefaultDirective,
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                pagination_component_1.PaginationComponent,
                todos_component_1.TodosComponent,
                new_component_1.NewTodoComponent,
                details_component_1.TodoDetailsComponent,
                summary_component_1.TodoSummaryComponent
            ],
            providers: [todo_service_1.TodoService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map