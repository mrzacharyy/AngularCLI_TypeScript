import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './AppComponent';
import { Investment } from './investment.component';
import { Loan } from './loan.component';
import { Income } from './income.component';
import { Outcome } from './outcome.component';

const appRoutes: Routes =[
{ path: 'navigator?tab=0', component: Income},
{ path: 'navigator?tab=1', component: Outcome},
{ path: 'navigator?tab=2', component: Loan },
{ path: 'navigator?tab=3', component: Investment }
];

@NgModule({
imports: [ BrowserModule, RouterModule.forRoot(appRoutes)],
declarations: [ AppComponent, Income, Outcome, Loan, Investment],
bootstrap: [ AppComponent ]
})
export class AppModule { }