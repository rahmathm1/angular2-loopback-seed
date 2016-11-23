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
var todo_service_1 = require('./todo.service');
var TodosComponent = (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodosComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAll().subscribe(function (response) { return _this.todos = response.json(); }, function (response) { return _this.message = response; });
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.todoService.delete(todo).subscribe(function (response) {
            _this.getTodos();
        }, function (response) { return _this.message = response; });
    };
    TodosComponent.prototype.updateTodo = function (todo, status) {
        var _this = this;
        todo.status = !todo.status;
        this.todoService.save(todo).subscribe(function (response) {
            _this.getTodos();
        }, function (response) { return _this.message = response; });
    };
    TodosComponent.prototype.showPage = function (pageNumber) {
        console.log(pageNumber);
    };
    TodosComponent.prototype.showMessage = function (type, message) {
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'todos.component.html',
            styleUrls: ['todos.component.css']
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map