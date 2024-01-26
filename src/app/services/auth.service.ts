import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cms_types } from '../types';
import { cms_defs } from '../defs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: cms_types.api.AuthUserData | undefined = undefined;
  token: string | undefined = undefined;
  authStatus = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.authStatus.asObservable();

  constructor(private http: HttpClient) {  }

  private tokenKey = 'auth_token';

  login(email: string, password: string) {
    return this.http.post<cms_types.api.AuthResponse>(`${cms_defs.backendUrl}/users/login`, {email, password}).subscribe(response => {
      if (response.token && response.data) {
        this.token = response.token;
        this.userData = response.data;
        this.setToken(this.token);
      }
    })
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.authStatus.next(true);
  }

  getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      this.authStatus.next(true);
    }

    return token;
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
    this.authStatus.next(false);
  }
}