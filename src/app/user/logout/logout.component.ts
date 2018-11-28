import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      logging out ... 
    </p>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
