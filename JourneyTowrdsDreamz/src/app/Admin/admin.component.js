"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.firstName = "Rahul";
        this.lastName = "Wakulkar";
        this.gender = "Male";
        this.age = 26;
        this.showDetails = false;
    }
    // debugger;
    AdminComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    AdminComponent = __decorate([
        core_1.Component({
            // debugger;
            selector: 'my-admin',
            templateUrl: 'app/employee/employee.component.html'
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map