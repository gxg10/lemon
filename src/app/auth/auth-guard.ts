import { Injectable } from '@angular/core';
import { CanActivateChild, CanLoad, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { IAuthStatus, AuthService } from './auth.service';
import { UiService } from '../common/ui.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  protected currentAuthStatus: IAuthStatus;

  constructor(
    protected authService: AuthService,
    protected router: Router,
    private uiService: UiService
  ) {
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = authStatus)
    );
   }

   canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin();
  }

   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
   ): boolean | Observable<boolean> | Promise<boolean> {
     return  this.checkLogin(route);
   }

   canActivateChild(
     childRoute: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
   ): boolean | Observable<boolean> | Promise<boolean> {
     return this.checkLogin(childRoute);
   }

   protected checkLogin(route?: ActivatedRouteSnapshot) {
     let roleMatch = true;
     let params: any;
     if (route) {
       const expectedRole = route.data.expectedRole;

       if (expectedRole) {
         roleMatch = this.currentAuthStatus.userRole === expectedRole;
       }

       if (roleMatch) {
         params = {redirectUrl: route.pathFromRoot.map(r => r.url).join('/')};
       }
     }
     if (!this.currentAuthStatus.isAuthenticated || !roleMatch) {
       this.showAlert(this.currentAuthStatus.isAuthenticated, roleMatch);

       this.router.navigate(['login', params || {}]);
       return false;
     }
     return true;
   }

   private showAlert(isAuth: boolean, roleMatch: boolean) {
     if (!isAuth) {
       this.uiService.showToast('you msut login to continue');
     }

     if (!roleMatch) {
       this.uiService.showToast('you do not have the permission to view this resour');
     }
   }
}
