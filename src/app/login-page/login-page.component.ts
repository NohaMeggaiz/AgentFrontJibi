import { Component } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { LoginRequest } from '../models/LoginRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  onSubmit(): void {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Handle successful login (e.g., store JWT, redirect)
        this.router.navigate(['/list']); // Example redirect after login
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

}
