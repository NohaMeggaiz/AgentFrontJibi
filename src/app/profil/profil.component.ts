import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  username: string = 'JohnDoe'; // Remplacez par le nom d'utilisateur actuel
  email: string = 'john.doe@example.com'; // Remplacez par l'email actuel
  patentNumber: string = '123456'; // Remplacez par le numéro de patente actuel
  registrationNumber: string = '789012'; // Remplacez par le numéro de matriculation actuel

  changePasswordVisible: boolean = false;
  newPassword: string = '';

  toggleChangePassword(): void {
    this.changePasswordVisible = !this.changePasswordVisible;
  }

  changePassword(): void {
    // Logique pour changer le mot de passe, par exemple, appeler un service HTTP pour mettre à jour le mot de passe
    console.log('Nouveau mot de passe:', this.newPassword);
    // Réinitialiser le champ du nouveau mot de passe après le changement
    this.newPassword = '';
    // Masquer à nouveau le formulaire de changement de mot de passe
    this.changePasswordVisible = false;
  }

}
