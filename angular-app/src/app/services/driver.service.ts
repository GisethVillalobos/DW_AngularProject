import { Injectable } from '@angular/core';
import { DriverDTO } from '../dto/driver-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  private basUrl = environment.SERVER_URL + "/driver";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private httpClient: HttpClient) {}
  
  getDriverList(): Observable<DriverDTO[]> {
    return this.httpClient.get<DriverDTO[]>(`${this.basUrl}/all`);
  }

  createDriver(driverDTO: DriverDTO): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/create`, driverDTO);
  }

  getDriverById(idDriver: number): Observable<DriverDTO>{
    return this.httpClient.get<DriverDTO>(`${this.basUrl}/read/${idDriver}`);
  }

  updateDriver(idDriver:number, driverDTO: DriverDTO): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/update/${idDriver}`, driverDTO);
  }

  deleteDriver(idDriver: number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/delete/${idDriver}`);
  }
  
}
