import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: false;

  constructor() { }

  isAuthenticated() {
    return this.isAuthenticated;
  }
}
