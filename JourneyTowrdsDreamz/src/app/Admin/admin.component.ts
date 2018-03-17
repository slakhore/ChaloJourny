import { Component } from '@angular/core';

@Component({
    // debugger;
    selector: 'my-admin',
    templateUrl: 'app/employee/employee.component.html'
})

export class AdminComponent {
    firstName: string = "Rahul";
    lastName: string = "Wakulkar";
    gender: string = "Male";
    age: number = 26;
    showDetails: boolean = false;
    // debugger;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}