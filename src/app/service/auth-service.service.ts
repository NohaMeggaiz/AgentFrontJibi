import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtAgentResponse } from '../models/JwtAgentResponse';
import { LoginRequest } from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loginUrl = 'http://localhost:8090/api/auth/Agentlogin';

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<JwtAgentResponse> {
    return this.http.post<JwtAgentResponse>(this.loginUrl, loginRequest);
  }
}
