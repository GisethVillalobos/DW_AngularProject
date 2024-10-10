import { Injectable } from '@angular/core';
import { Schedule } from '../schedule.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  
  private basUrl = "http://localhost:8080/api/schedule"
  
  constructor(private httpClient: HttpClient) {}
  
  getScheduleList(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(`${this.basUrl}`);
  }

  createSchedule(schedule: Schedule): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, schedule);
  }

  getScheduleById(idSchedule: number): Observable<Schedule>{
    return this.httpClient.get<Schedule>(`${this.basUrl}/${idSchedule}`);
  }

  updateSchedule(idSchedule:number, schedule: Schedule): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${idSchedule}`, schedule);
  }

  deleteSchedule(idSchedule:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${idSchedule}`);
  }
  
}
