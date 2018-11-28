import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager/manager.component';
import { Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard';


@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ],
  providers: [AuthGuard, AuthService]
})
export class ManagerModule {
 }



