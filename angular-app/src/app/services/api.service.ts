import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.SERVER_URL; // Your backend URL

  constructor(private http: HttpClient) {}

  // Generic method for GET, POST, PUT, DELETE
  private sendRequest(method: string, endpoint: string, body?: any, params?: HttpParams): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    let requestOptions: { headers: HttpHeaders, params?: HttpParams, body?: any } = { 
      headers, 
      params 
    };

    if (body) {
      requestOptions.body = body;
    }

    return this.http.request(method, `${this.apiUrl}/${endpoint}`, requestOptions);

  }

  get(endpoint: string, params?: HttpParams): Observable<any> {
    return this.sendRequest('GET', endpoint, null, params);
  }

  post(endpoint: string, body: any): Observable<any> {
    return this.sendRequest('POST', endpoint, body);
  }

  put(endpoint: string, body: any): Observable<any> {
    return this.sendRequest('PUT', endpoint, body);
  }

  delete(endpoint: string): Observable<any> {
    return this.sendRequest('DELETE', endpoint);
  }
}
