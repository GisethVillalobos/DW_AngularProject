import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';
import { AssignmentService } from '../../services/assignment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})

export class AssignmentListComponent implements OnInit {
  
  assignments!: AssignmentDTO[];
  
  constructor(private assignmentService: AssignmentService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.getAssignments();
  }
  
  private getAssignments() {
    this.assignmentService.getAssignmentList().subscribe(data => {
      console.log(data);
      this.assignments = data;
    });
  }

  createAssignment() {
    this.router.navigate(['assignment/create']);
  }

  readAssignment(idAssignment: number) {
    this.router.navigate(['assignment/read', idAssignment]);
  }
  
  updateAssignment(idAssignment: number) {
    this.router.navigate(['assignment/update', idAssignment]);
  }
  
  deleteAssignment(idAssignment: number) {
    this.assignmentService.deleteAssignment(idAssignment).subscribe(data => {
      console.log(data);
      this.getAssignments();
    });
  }
}