import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';
import { AssignmentService } from '../../services/assignment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-create',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './assignment-create.component.html',
  styleUrl: './assignment-create.component.css'
})

export class AssignmentCreateComponent implements OnInit {

  assignmentDTO: AssignmentDTO = new AssignmentDTO(0, 0, 0, 0, 0);

  availableBusIds: number[] = [];
  availableDriverIds: number[] = [];
  availableRouteIds: number[] = [];
  availableScheduleIds: number[] = [];

  constructor(private assignmentService: AssignmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAvailableBusIds();
    this.getAvailableDriverIds();
    this.getAvailableRouteIds();
    this.getAvailableScheduleIds();
  }

  // Getting ids
  getAvailableBusIds() {
    this.assignmentService.getBusIds().subscribe({
      next: (ids) => {
        this.availableBusIds = ids;
      },
      error: (e) => {
        console.error('Error fetching bus IDs:', e);
      }
    });
  }

  getAvailableDriverIds() {
    this.assignmentService.getDriverIds().subscribe({
      next: (ids) => {
        this.availableDriverIds = ids;
      },
      error: (e) => {
        console.error('Error fetching driver IDs:', e);
      }
    });
  }

  getAvailableRouteIds() {
    this.assignmentService.getRouteIds().subscribe({
      next: (ids) => {
        this.availableRouteIds = ids;
      },
      error: (e) => {
        console.error('Error fetching route IDs:', e);
      }
    });
  }

  getAvailableScheduleIds() {
    this.assignmentService.getScheduleIds().subscribe({
      next: (ids) => {
        this.availableScheduleIds = ids;
      },
      error: (e) => {
        console.error('Error fetching schedule IDs:', e);
      }
    });
  }
  
  // Saving assignment
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
    this.router.navigate(['/assignment/all']);
  }

  onSubmit() {
    console.log(this.assignmentDTO);
    this.saveAssignment();
  }
}