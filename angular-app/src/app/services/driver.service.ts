import { Injectable } from '@angular/core';
import { Driver } from '../model/driver.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  private basUrl = "http://localhost:8080/api/driver"
  
  constructor(private httpClient: HttpClient) {}
  
  getDriverList(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(`${this.basUrl}`);
  }

  createDriver(driver: Driver): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, driver);
  }

  getDriverById(idDriver: number): Observable<Driver>{
    return this.httpClient.get<Driver>(`${this.basUrl}/${idDriver}`);
  }

  updateDriver(idDriver:number, driver: Driver): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${idDriver}`, driver);
  }

  deleteDriver(idDriver:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${idDriver}`);
  }
  
}
