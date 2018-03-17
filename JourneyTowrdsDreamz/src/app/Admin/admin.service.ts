import { Injectable } from '@angular/core';
import { IAdmin } from './admin.admininterface';
import { Http} from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AdminModel } from './admin.model';
import 'rxjs/add/operator/catch';

 
@Injectable()
export class AdminService { // from controller it come here
    constructor(private _http: Http) {
    }

   
    getConsumerList() {
        debugger;
        return this._http.get('/Home/GetRecord')
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response) {
        debugger;
        console.log(error);
        return Observable.throw(error || "Internal server error");
    }


    postData(detail: AdminModel) { // last
        return this._http.post('/Home/Save', detail);
    }




}