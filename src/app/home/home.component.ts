import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  template: `
  <div fxLayout="column" fxLayoutAlign="center center">
  <span class="mat-display-2">Hello, Lemonite!</span>
  <button mat-raised-button color="primary">Login</button>
</div>
  `,
  styles: [`
    div[fxLayout] {margin-top: 32px;}
    `
  ]
})
export class HomeComponent implements OnInit {
  displayLogin = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.displayLogin = !this.authService.isAuthenticated();
  }

}
