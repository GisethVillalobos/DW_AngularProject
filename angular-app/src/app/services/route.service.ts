import { Injectable } from '@angular/core';
import { RouteDTO } from '../dto/route-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RouteService {
  
  private basUrl = "http://localhost:8080/api/route"

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private httpClient: HttpClient) {}
  
  getRouteList(): Observable<RouteDTO[]> {
    return this.httpClient.get<RouteDTO[]>(`${this.basUrl}/all`);
  }

  createRoute(routeDTO: RouteDTO): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/create`, routeDTO);
  }

  getRouteById(idRoute: number): Observable<RouteDTO>{
    return this.httpClient.get<RouteDTO>(`${this.basUrl}/read/${idRoute}`);
  }

  updateRoute(idRoute: number, routeDTO: RouteDTO): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/update/${idRoute}`, routeDTO);
  }

  deleteRoute(idRoute:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/delete/${idRoute}`);
  }
  
}
