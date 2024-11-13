import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-assignment-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './assignment-update.component.html',
  styleUrl: './assignment-update.component.css'
})

export class AssignmentUpdateComponent implements OnInit {
  
  id!: number;

  assignmentDTO: AssignmentDTO = new AssignmentDTO(0, 0, 0, 0, 0);

  constructor(private assignmentService: AssignmentService, private route: ActivatedRoute, private router: Router) { }

  private getAssignmentById() {
    this.id = this.route.snapshot.params['id'];
    this.assignmentService.getAssignmentById(this.id).subscribe({
      next: (data) => {
        this.assignmentDTO = data;
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
    this.assignmentService.updateAssignment(this.id, this.assignmentDTO).subscribe({
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
    this.updateAssignment();
  }
}