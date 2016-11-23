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
var router_1 = require('@angular/router');
var todo_service_1 = require('./todo.service');
var todo_model_1 = require('./todo.model');
var TodoDetailsComponent = (function () {
    function TodoDetailsComponent(todoService, router, activatedRoute) {
        var _this = this;
        this.todoService = todoService;
        this.router = router;
        this.todo = new todo_model_1.Todo();
        this.activatedRoute = activatedRoute;
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            var id = param['id'];
            _this.getTodo(id);
        });
    }
    TodoDetailsComponent.prototype.ngOnInit = function () { };
    TodoDetailsComponent.prototype.getTodo = function (id) {
        var _this = this;
        this.todoService.get(id).subscribe(function (response) { return _this.todo = response.json(); }, function (response) { return _this.message = response; });
    };
    TodoDetailsComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.todoService.delete(todo).subscribe(function (response) {
            _this.router.navigate(['/todos/all']);
        }, function (response) { return _this.message = response; });
    };
    TodoDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'details.component.html',
            styleUrls: ['details.component.css']
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.Router, router_1.ActivatedRoute])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
}());
exports.TodoDetailsComponent = TodoDetailsComponent;
//# sourceMappingURL=details.component.js.map