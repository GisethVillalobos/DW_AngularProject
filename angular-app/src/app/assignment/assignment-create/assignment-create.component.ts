import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../assignment.model';
import { AssignmentService } from '../../services/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-create',
  standalone: true,
  imports: [],
  templateUrl: './assignment-create.component.html',
  styleUrl: './assignment-create.component.css'
})

export class AssignmentCreateComponent implements OnInit {

  assignment: Assignment = new Assignment();

  constructor(private assignmentService: AssignmentService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAssignment() {
    this.assignmentService.createAssignment(this.assignment).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToAssignmentList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToAssignmentList() {
    this.router.navigate(['/assignments']);
  }

  onSubmit() {
    console.log(this.assignment);
    this.saveAssignment();
  }
}