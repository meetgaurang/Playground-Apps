import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-employee',
    templateUrl: 'employee.html'
})
export class EmployeePage {
    selectedEmployee : any;

    constructor (public navCtrl : NavController, public navParams: NavParams) {
        this.selectedEmployee = navParams.get("selectedEmployee");
    }
}