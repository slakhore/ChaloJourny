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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var admin_service_1 = require("./admin.service");
var admin_model_1 = require("./admin.model");
var ConsumerListComponent = /** @class */ (function () {
    function ConsumerListComponent(_adminService) {
        this._adminService = _adminService;
        this.admin = new admin_model_1.AdminModel();
        //debugger;
    }
    ConsumerListComponent.prototype.ngOnInit = function () {
        //debugger;
        this.getConsumerList();
    };
    ConsumerListComponent.prototype.getConsumerList = function () {
        var _this = this;
        debugger;
        this._adminService.getConsumerList().subscribe(function (data) { return _this.ConsumerRecord = data; }, function (error) { return _this.errorMessage = error; });
        // alert(this.consumerDetails.length);
    };
    ConsumerListComponent.prototype.addRecords = function () {
        debugger;
        window.location.href = '/Home/AddRecords';
    };
    ConsumerListComponent = __decorate([
        core_1.Component({
            selector: 'consumerDetails',
            templateUrl: 'app/Admin/consumerList.component.html',
            //styleUrls: ['app/employee/employeeList.component.css'],
            providers: [admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], ConsumerListComponent);
    return ConsumerListComponent;
}());
exports.ConsumerListComponent = ConsumerListComponent;
//# sourceMappingURL=consumerList.component.js.map