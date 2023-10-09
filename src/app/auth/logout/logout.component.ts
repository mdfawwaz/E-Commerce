// logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  template: '<button (click)="logout()" class="btn btn-danger">Logout</button>',
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    console.log('Logged out');
    // Handle logout, e.g., redirect to login page
  }
}
