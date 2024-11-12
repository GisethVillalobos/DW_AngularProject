import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-assignment-create',
  standalone: true,
  imports: [],
  templateUrl: './assignment-create.component.html',
  styleUrl: './assignment-create.component.css'
})

export class AssignmentCreateComponent implements OnInit {

  assignmentDTO: AssignmentDTO = new AssignmentDTO(null, 0, 0, 0, 0);

  constructor(private assignmentService: AssignmentService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAssignment() {
    this.assignmentService.createAssignment(this.assignmentDTO).subscribe({
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
    console.log(this.assignmentDTO);
    this.saveAssignment();
  }
}