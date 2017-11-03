import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EmployeePage } from '../employee/employee';

@Component({
    selector: 'page-employeelist',
    templateUrl: 'employeelist.html'
})
export class EmployeeListPage {
    employees: Array<{icon: string, name: string}>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.employees = [];
        for (let i = 0; i < 10; i++) {
            this.employees.push({
                icon: "contact",
                name: "Name#" + i
            });     
        }
    }
    itemTapped (event, item) {
        this.navCtrl.push(EmployeePage, {
            selectedEmployee: item
        });
    }
}
