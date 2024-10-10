import { Injectable } from '@angular/core';
import { Assignment } from '../model/assignment.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  
  private basUrl = "http://localhost:8080/api/assignment"
  
  constructor(private httpClient: HttpClient) {}
  
  getAssignmentList(): Observable<Assignment[]> {
    return this.httpClient.get<Assignment[]>(`${this.basUrl}`);
  }

  createAssignment(assignment: Assignment): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, assignment);
  }

  getAssignmentById(idAssignment: number): Observable<Assignment>{
    return this.httpClient.get<Assignment>(`${this.basUrl}/${idAssignment}`);
  }

  updateAssignment(idAssignment:number, assignment: Assignment): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${idAssignment}`, assignment);
  }

  deleteAssignment(idAssignment:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${idAssignment}`);
  }
  
}
