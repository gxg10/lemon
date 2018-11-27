import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {path: 'home', component: ManagerHomeComponent},
      {path: '', redirectTo: '/manager/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
