import { NgModule } from '@angular/core';

import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule ({
    imports: [
        EmployeesRoutingModule
    ],
    declarations: [
        EmployeesComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent
    ]
})
export class EmployeesModule {

}