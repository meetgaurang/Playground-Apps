import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { EmployeesModule } from './employees/employees.module';
import { DataBinding } from './databinding/databinding.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'hello', component: AppComponent},
    {path: 'sample', component: SampleComponent},
    {path: 'employeesdata', loadChildren: './employees/employees.module#EmployeesModule'},
    {path: 'databinding', component: DataBinding}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}