import { Component } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-panel',
  templateUrl: './agent-panel.component.html',
  styleUrl: './agent-panel.component.css'
})
export class AgentPanelComponent {
  constructor(private authService: AuthServiceService,private router: Router) { }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }


}
