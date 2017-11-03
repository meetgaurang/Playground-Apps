import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { EmployeesModule } from './employees/employees.module';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'hello', component: AppComponent},
    {path: 'sample', component: SampleComponent},
    {path: 'employeesdata', loadChildren: './employees/employees.module#EmployeesModule'}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}