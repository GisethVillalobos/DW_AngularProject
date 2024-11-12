import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssignmentDTO } from '../dto/assignment-dto';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {
  
  private basUrl = "http://localhost:8080/api/assignment"

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  
  constructor(private httpClient: HttpClient) {}
  
  getAssignmentList(): Observable<AssignmentDTO[]> {
    return this.httpClient.get<AssignmentDTO[]>(`${this.basUrl}/all`);
  }

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
