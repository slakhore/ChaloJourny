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
var user_service_1 = require("../services/user.service");
var User_Model_1 = require("./User.Model");
var UserDetails = /** @class */ (function () {
    function UserDetails(userService) {
        this.userService = userService;
        this.user = new User_Model_1.User();
    }
    UserDetails.prototype.SaveUser = function () {
        debugger;
        this.userService.SaveUser(this.user)
            .subscribe(function (response) {
            debugger;
            if (response.text() == "1") {
                alert("Data saved successfully");
            }
            else {
                alert("Data saved failed!");
            }
        }, function (error) { return console.log(error); });
    };
    UserDetails = __decorate([
        core_1.Component({
            selector: 'UserAdd',
            templateUrl: 'app/UserRegistration/UserRegistration.Component.html',
            styleUrls: ['app/UserRegistration/UserRegistration.Component.css'],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserDetails);
    return UserDetails;
}());
exports.UserDetails = UserDetails;
//# sourceMappingURL=UserRegistration.component.js.map