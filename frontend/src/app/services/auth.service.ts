import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private API
  //private API_URL = 'https://sb-diaribusseig.abellot.net/api/auth';
  private API_URL = 'https://localhost:3003/api/auth';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  register(data: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, data);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
