import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './User.Model';


@Component({
    selector: 'UserAdd',
    templateUrl: 'app/UserRegistration/UserRegistration.Component.html',
    styleUrls: ['app/UserRegistration/UserRegistration.Component.css'],
    providers: [UserService]
})

export class UserDetails {
    public user: User = new User();

    constructor(private userService: UserService) { }
    
    SaveUser() {
        debugger;
        this.userService.SaveUser(this.user)
            .subscribe(
            (response) => {
                debugger;
                if (response.text() == "1") {
                    alert("Data saved successfully");
                }
                else {
                    alert("Data saved failed!");
                }
                
            },
            (error) => console.log(error)
            );

    }
}