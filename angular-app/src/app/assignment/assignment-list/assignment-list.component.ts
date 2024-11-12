import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment.model';
import { AssignmentService } from '../../services/assignment.service';
import { Router } from '@angular/router';
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
  
  assignments: Assignment[] | undefined;
  
  constructor(private assignmentService: AssignmentService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.getAssignments();
  }
  
  private getAssignments() {
    this.assignmentService.getAssignmentList().subscribe(data => {
      this.assignments = data;
    });
  }
  
  updateAssignment(idAssignment: number) {
    this.router.navigate(['update-assignment', idAssignment]);
  }
  
  deleteAssignment(idAssignment: number) {
    this.assignmentService.deleteAssignment(idAssignment).subscribe(data => {
      console.log(data);
      this.getAssignments();
    });
  }
}