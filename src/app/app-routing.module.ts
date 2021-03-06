import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:redirectUrl', component: LoginComponent},
  { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' ,
canLoad: [AuthGuard]},
  {path: 'user', loadChildren: './user/user.module#UserModule',
canActivate: [AuthGuard]},
  { path: 'pos', loadChildren: './pos/pos.module#PosModule' },
  {path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
