import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtAgentResponse } from '../models/JwtAgentResponse';
import { LoginRequest } from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loginUrl = 'http://localhost:8090/api/auth/Agentlogin';

  private changePasswordUrl = 'http://localhost:8090/api/agent/changePassword';


  constructor(private http: HttpClient) { }

  /*login(loginRequest: LoginRequest): Observable<JwtAgentResponse> {
    return this.http.post<JwtAgentResponse>(this.loginUrl, loginRequest);
  }*/
  private currentAgent: JwtAgentResponse | null = null;


  login(loginRequest: LoginRequest): Observable<JwtAgentResponse> {
    return this.http.post<JwtAgentResponse>(this.loginUrl, loginRequest).pipe(
      tap(response => {
        this.currentAgent = response;
        localStorage.setItem('jwtToken', response.token);
        localStorage.setItem('currentAgent', JSON.stringify(response));
      })
    );
  }

  getCurrentAgent(): JwtAgentResponse | null {
    if (!this.currentAgent) {
      const storedAgent = localStorage.getItem('currentAgent');
      if (storedAgent) {
        this.currentAgent = JSON.parse(storedAgent);
      }
    }
    return this.currentAgent;
  }

  logout(): void {
    this.currentAgent = null;
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('currentAgent');
  }

  changePassword(username: string, newPassword: string): Observable<string> {
    const payload = { username, newPassword };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.changePasswordUrl, payload, { headers, responseType: 'text' });
  }
}
