import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteDTO } from '../dto/route-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class RouteService {
  
  private basUrl = "route";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private apiService: ApiService) {}
  
  getRouteList(): Observable<RouteDTO[]> {
    return this.apiService.get(`${this.basUrl}/all`);
  }

  createRoute(routeDTO: RouteDTO): Observable<Object> {
    return this.apiService.post(`${this.basUrl}/create`, routeDTO);
  }

  getRouteById(idRoute: number): Observable<RouteDTO>{
    return this.apiService.get(`${this.basUrl}/read/${idRoute}`);
  }

  updateRoute(idRoute: number, routeDTO: RouteDTO): Observable<Object>{
    return this.apiService.put(`${this.basUrl}/update/${idRoute}`, routeDTO);
  }

  deleteRoute(idRoute:number): Observable<Object>{
    return this.apiService.delete(`${this.basUrl}/delete/${idRoute}`);
  }
  
}
