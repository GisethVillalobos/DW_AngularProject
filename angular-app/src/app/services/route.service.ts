import { Injectable } from '@angular/core';
import { Route } from '../route.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  
  private basUrl = "http://localhost:8080/api/route"
  
  constructor(private httpClient: HttpClient) {}
  
  getRouteList(): Observable<Route[]> {
    return this.httpClient.get<Route[]>(`${this.basUrl}`);
  }

  createRoute(route: Route): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, route);
  }

  getRouteById(idRoute: number): Observable<Route>{
    return this.httpClient.get<Route>(`${this.basUrl}/${idRoute}`);
  }

  updateRoute(idRoute:number, route: Route): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${idRoute}`, route);
  }

  deleteRoute(idRoute:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${idRoute}`);
  }
  
}
