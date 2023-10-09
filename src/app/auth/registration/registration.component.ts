import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      () => {
        console.log('Registration successful');
        // Handle successful registration, e.g., redirect to login page
      },
      (error) => {
        console.error('Registration failed', error);
        // Handle registration error
      }
    );
  }
}
