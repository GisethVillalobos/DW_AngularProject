import { AssignmentDTO } from '../dto/assignment-dto';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {
  
  private basUrl = environment.SERVER_URL + "/assignment";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private httpClient: HttpClient) {}
  
  getAssignmentList(): Observable<AssignmentDTO[]> {
    return this.httpClient.get<AssignmentDTO[]>(`${this.basUrl}/all`);
  }

  // Obtener ids
  getDriverIds(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${environment.SERVER_URL}/driver/ids`);
  }

  getBusIds(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${environment.SERVER_URL}/bus/ids`);
  }

  getRouteIds(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${environment.SERVER_URL}/route/ids`);
  }

  getScheduleIds(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${environment.SERVER_URL}/schedule/ids`);
  }

  // CRUD
  createAssignment(assignmentDTO: AssignmentDTO): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/create`, assignmentDTO);
  }

  getAssignmentById(idAssignment: number): Observable<AssignmentDTO>{
    return this.httpClient.get<AssignmentDTO>(`${this.basUrl}/read/${idAssignment}`);
  }

  updateAssignment(idAssignment:number, assignmentDTO: AssignmentDTO): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/update/${idAssignment}`, assignmentDTO);
  }

  deleteAssignment(idAssignment:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/delete/${idAssignment}`);
  }
  
}
