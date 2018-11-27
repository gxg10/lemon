import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
