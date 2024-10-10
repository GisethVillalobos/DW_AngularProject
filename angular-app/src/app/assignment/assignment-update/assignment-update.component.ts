import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../assignment.model';

@Component({
  selector: 'app-assignment-update',
  standalone: true,
  imports: [],
  templateUrl: './assignment-update.component.html',
  styleUrl: './assignment-update.component.css'
})

export class AssignmentUpdateComponent implements OnInit {
  id!: number;
  assignment: Assignment = new Assignment();
  constructor(private assignmentService: AssignmentService,
    private route: ActivatedRoute, private router: Router) { }
  private getAssignmentById() {
    this.id = this.route.snapshot.params['id'];
    this.assignmentService.getAssignmentById(this.id).subscribe({
      next: (data) => {
        this.assignment = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  ngOnInit(): void {
    this.getAssignmentById();
  }
  updateAssignment() {
    this.assignmentService.updateAssignment(this.id, this.assignment).subscribe({
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
    this.updateAssignment();
  }
}