import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import  { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import  { EmployeeListComponent } from './employee-list/employee-list.component';

const routes : Routes = [
    {
        path: '', component: EmployeesComponent,
        children: [
            {path: 'employeedetails', component: EmployeeDetailsComponent},
            {path: 'employees', component: EmployeeListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})
export class EmployeesRoutingModule {

}