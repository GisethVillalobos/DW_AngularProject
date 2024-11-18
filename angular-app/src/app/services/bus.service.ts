import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDTO } from '../dto/bus-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  
  private basUrl = "bus";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private apiService: ApiService) {}
  
  getBusList(): Observable<BusDTO[]> {
    return this.apiService.get(`${this.basUrl}/all`);
  }

  createBus(busDTO: BusDTO): Observable<Object> {
    return this.apiService.post(`${this.basUrl}/create`, busDTO);
  }

  getBusById(idBus: number): Observable<BusDTO>{
    return this.apiService.get(`${this.basUrl}/read/${idBus}`);
  }

  updateBus(idBus:number, busDTO: BusDTO): Observable<Object>{
    return this.apiService.put(`${this.basUrl}/update/${idBus}`, busDTO);
  }

  deleteBus(idBus:number): Observable<Object>{
    return this.apiService.delete(`${this.basUrl}/delete/${idBus}`);
  }
  
}
