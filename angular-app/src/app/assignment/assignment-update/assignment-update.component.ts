import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';
import { AssignmentService } from '../../services/assignment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-update',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './assignment-update.component.html',
  styleUrl: './assignment-update.component.css'
})

export class AssignmentUpdateComponent implements OnInit {
  
  id!: number;

  assignmentDTO: AssignmentDTO = new AssignmentDTO(0, 0, 0, 0, 0);

  availableBusIds: number[] = [];
  availableDriverIds: number[] = [];
  availableRouteIds: number[] = [];
  availableScheduleIds: number[] = [];

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

    // Loading ids
    this.getAvailableBusIds();
    this.getAvailableDriverIds();
    this.getAvailableRouteIds();
    this.getAvailableScheduleIds();
  }

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
    this.router.navigate(['/assignment/all']);
  }
  onSubmit() {
    console.log(this.assignmentDTO);
    this.updateAssignment();
  }
}