import { Component, OnInit, NgModule } from '@angular/core';
import { IAdmin } from './admin.admininterface';
import { AdminService } from './admin.service';
import { AdminModel } from './admin.model';




@Component({
   
    selector: 'consumerDetails',
    templateUrl: 'app/Admin/consumerList.component.html',
    //styleUrls: ['app/employee/employeeList.component.css'],
    providers: [AdminService]
})

export class ConsumerListComponent implements OnInit {
    
    public admin: AdminModel = new AdminModel();

    // debugger;
    ConsumerRecord: AdminModel[];
    errorMessage: any;


    constructor(private _adminService: AdminService) {
        //debugger;
    }

    ngOnInit() {
        //debugger;
        this.getConsumerList();

    }
    
    getConsumerList() {
        debugger;
        this._adminService.getConsumerList().subscribe(
         
            data => this.ConsumerRecord = data,
            error => this.errorMessage = error

        )
       // alert(this.consumerDetails.length);
    }
    
    addRecords() {
        debugger;

        window.location.href = '/Home/AddRecords';
    }

   
 
}