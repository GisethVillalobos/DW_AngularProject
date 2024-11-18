import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverDTO } from '../dto/driver-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  private basUrl = "driver";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private apiService: ApiService) {}
  
  getDriverList(): Observable<DriverDTO[]> {
    return this.apiService.get(`${this.basUrl}/all`);
  }

  createDriver(driverDTO: DriverDTO): Observable<Object> {
    return this.apiService.post(`${this.basUrl}/create`, driverDTO);
  }

  getDriverById(idDriver: number): Observable<DriverDTO>{
    return this.apiService.get(`${this.basUrl}/read/${idDriver}`);
  }

  updateDriver(idDriver:number, driverDTO: DriverDTO): Observable<Object>{
    return this.apiService.put(`${this.basUrl}/update/${idDriver}`, driverDTO);
  }

  deleteDriver(idDriver: number): Observable<Object>{
    return this.apiService.delete(`${this.basUrl}/delete/${idDriver}`);
  }
  
}
