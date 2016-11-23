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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageSize = 10;
        this.showPage = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.pages = new Array(this.pageSize);
    };
    PaginationComponent.prototype.show = function (pageNumber) {
        this.showPage.emit(pageNumber);
        //console.log("Show page :" + pageNumber);
    };
    __decorate([
        core_1.Input('page-size'), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "showPage", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pagination',
            templateUrl: 'pagination.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map