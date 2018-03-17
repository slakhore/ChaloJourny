import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { User } from '../UserRegistration/User.Model';

@Injectable()
export class UserService {
    constructor(private _http: Http) {

    }

    SaveUser(user: User) {

        return this._http.post('/User/SaveUser', user);
       
    }
}