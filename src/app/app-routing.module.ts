import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"panel",component:AgentPanelComponent},
  {path:"list",component:ListClientsComponent},
  {path:"Add",component:AddClientComponent},
  {path:"profil",component:ProfilComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
