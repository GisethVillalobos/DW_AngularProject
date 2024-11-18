import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleDTO } from '../dto/schedule-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})


export class ScheduleService {
  
  private basUrl = "schedule";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private apiService: ApiService) {}
  
  getScheduleList(): Observable<ScheduleDTO[]> {
    return this.apiService.get(`${this.basUrl}/all`);
  }

  createSchedule(scheduleDTO: ScheduleDTO): Observable<Object> {
    return this.apiService.post(`${this.basUrl}/create`, scheduleDTO);
  }

  getScheduleById(idSchedule: number): Observable<ScheduleDTO>{
    return this.apiService.get(`${this.basUrl}/read/${idSchedule}`);
  }

  updateSchedule(idSchedule: number, scheduleDTO: ScheduleDTO): Observable<Object>{
    return this.apiService.put(`${this.basUrl}/update/${idSchedule}`, scheduleDTO);
  }

  deleteSchedule(idSchedule: number): Observable<Object>{
    return this.apiService.delete(`${this.basUrl}/delete/${idSchedule}`);
  }
  
}