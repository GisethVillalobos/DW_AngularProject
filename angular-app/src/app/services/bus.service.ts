import { Injectable } from '@angular/core';
import { Bus } from '../model/bus.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  
  private basUrl = "http://localhost:8080/api/bus"
  
  constructor(private httpClient: HttpClient) {}
  
  getBusList(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(`${this.basUrl}`);
  }

  createBus(bus: Bus): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, bus);
  }

  getBusById(idBus: number): Observable<Bus>{
    return this.httpClient.get<Bus>(`${this.basUrl}/${idBus}`);
  }

  updateBus(idBus:number, bus: Bus): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${idBus}`, bus);
  }

  deleteBus(idBus:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${idBus}`);
  }
  
}
