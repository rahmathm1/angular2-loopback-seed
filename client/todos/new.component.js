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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var todo_model_1 = require('./todo.model');
var todo_service_1 = require('./todo.service');
var NewTodoComponent = (function () {
    function NewTodoComponent(todoService, router, activatedRoute) {
        var _this = this;
        this.todoService = todoService;
        this.router = router;
        this.todo = new todo_model_1.Todo();
        this.createForm = new forms_1.FormGroup({
            title: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('', forms_1.Validators.required),
            status: new forms_1.FormControl(false)
        });
        this.activatedRoute = activatedRoute;
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            var id = param['id'];
            _this.pageMode = (id ? 'Edit' : 'New');
            if (id)
                _this.getTodo(id);
        });
    }
    NewTodoComponent.prototype.ngOnInit = function () { };
    NewTodoComponent.prototype.getTodo = function (id) {
        var _this = this;
        this.todoService.get(id).subscribe(function (response) { return _this.todo = response.json(); }, function (response) { return _this.message = response; });
    };
    NewTodoComponent.prototype.saveTodo = function () {
        var _this = this;
        this.todoService.save(this.todo).subscribe(function (response) {
            _this.router.navigate(['/todos/all']);
        }, function (error) { return console.log(error); });
    };
    NewTodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-todo',
            templateUrl: 'new.component.html'
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.Router, router_1.ActivatedRoute])
    ], NewTodoComponent);
    return NewTodoComponent;
}());
exports.NewTodoComponent = NewTodoComponent;
//# sourceMappingURL=new.component.js.map