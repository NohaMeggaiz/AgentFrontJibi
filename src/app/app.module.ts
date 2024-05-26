import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './profil/profil.component'; // Importer HttpClientModule

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AgentPanelComponent,
    LoginPageComponent,
    ListClientsComponent,
    AddClientComponent,
    ProfilComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Ajouter HttpClientModule ici

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule, 
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule ,
    MatInputModule,
    FormsModule,
    MatSelectModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
