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
var TodoSummaryComponent = (function () {
    function TodoSummaryComponent(todoService) {
        this.todoService = todoService;
        this.totalCount = 0;
    }
    TodoSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTodoCounts(true, function (response) {
            _this.totalCount += response.json().count;
            _this.completedCount = response.json().count;
        });
        this.getTodoCounts(false, function (response) {
            _this.totalCount += response.json().count;
            _this.openCount = response.json().count;
        });
    };
    TodoSummaryComponent.prototype.getTodoCounts = function (status, cb) {
        this.todoService.getCount(status).subscribe(cb);
    };
    TodoSummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-summary',
            templateUrl: 'summary.component.html'
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoSummaryComponent);
    return TodoSummaryComponent;
}());
exports.TodoSummaryComponent = TodoSummaryComponent;
//# sourceMappingURL=summary.component.js.map