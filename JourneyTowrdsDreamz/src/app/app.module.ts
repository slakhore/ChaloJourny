import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDetails } from './UserRegistration/UserRegistration.component';
import { ConsumerListComponent } from './Admin/consumerList.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'addUser', component: UserDetails },
            { path: 'admin', component: ConsumerListComponent }
        ])
    ],
    declarations: [AppComponent, UserDetails, ConsumerListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
