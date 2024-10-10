import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment.model';
import { AssignmentService } from '../../services/assignment.service';
import { Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';

@Component({
  selector: 'app-assignment-create',
  standalone: true,
  imports: [],
  templateUrl: './assignment-create.component.html',
  styleUrl: './assignment-create.component.css'
})

export class AssignmentCreateComponent implements OnInit {

  assignmentDTO: AssignmentDTO = new AssignmentDTO(null, 0, 0, 0, 0);
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