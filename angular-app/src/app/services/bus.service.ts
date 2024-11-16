import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BusDTO } from '../dto/bus-dto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  
  private basUrl = environment.SERVER_URL + "/bus";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private httpClient: HttpClient) {}
  
  getBusList(): Observable<BusDTO[]> {
    return this.httpClient.get<BusDTO[]>(`${this.basUrl}/all`);
  }

  createBus(busDTO: BusDTO): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/create`, busDTO);
  }

  getBusById(idBus: number): Observable<BusDTO>{
    return this.httpClient.get<BusDTO>(`${this.basUrl}/read/${idBus}`);
  }

  updateBus(idBus:number, busDTO: BusDTO): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/update/${idBus}`, busDTO);
  }

  deleteBus(idBus:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/delete/${idBus}`);
  }
  
}
