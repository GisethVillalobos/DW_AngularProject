import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { LoginDTO } from '../dto/login-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Login
  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, loginDTO);
  }

  // Signup
  signup(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, user);
  }

  // Method to get the current user profile or other protected data
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/user/profile`, { headers });
  }
}
