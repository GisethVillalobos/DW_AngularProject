import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleDTO } from '../dto/schedule-dto';

@Injectable({
  providedIn: 'root'
})


export class ScheduleService {
  
  private basUrl = "http://localhost:8080/api/schedule"

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private httpClient: HttpClient) {}
  
  getScheduleList(): Observable<ScheduleDTO[]> {
    return this.httpClient.get<ScheduleDTO[]>(`${this.basUrl}/all`);
  }

  createSchedule(scheduleDTO: ScheduleDTO): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/create`, scheduleDTO);
  }

  getScheduleById(idSchedule: number): Observable<ScheduleDTO>{
    return this.httpClient.get<ScheduleDTO>(`${this.basUrl}/read/${idSchedule}`);
  }

  updateSchedule(idSchedule: number, scheduleDTO: ScheduleDTO): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/update/${idSchedule}`, scheduleDTO);
  }

  deleteSchedule(idSchedule: number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/delete/${idSchedule}`);
  }
  
}