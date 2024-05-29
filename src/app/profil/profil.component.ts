import { Component } from '@angular/core';
import { JwtAgentResponse } from '../models/JwtAgentResponse';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
 
  username: string = '';
  email: string = '';
  patentNumber: string = '';
  registrationNumber: string = '';
  changePasswordVisible: boolean = false;
  newPassword: string = '';

  changePasswordSuccessMessage: string = '';
  changePasswordErrorMessage: string = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    const agent = this.authService.getCurrentAgent();
    if (agent) {
      this.username = agent.username;
      this.email = agent.email;
      this.patentNumber = agent.numPatente;
      this.registrationNumber = agent.numMatricule;
    }
  }

  toggleChangePassword(): void {
    this.changePasswordVisible = !this.changePasswordVisible;
    this.changePasswordSuccessMessage = '';
    this.changePasswordErrorMessage = '';
  }

  changePassword(): void {
    this.authService.changePassword(this.username, this.newPassword).subscribe({
      next: (response) => {
        console.log('Password change successful', response);
        this.changePasswordSuccessMessage = response;  // Assuming the response is a success message string
        this.newPassword = '';
        this.changePasswordVisible = false;
      },
      error: (error) => {
        console.error('Password change failed', error);
        this.changePasswordErrorMessage = 'Failed to change password';
      }
    });
  }

}
