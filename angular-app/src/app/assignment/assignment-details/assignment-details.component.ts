import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentDTO } from '../../dto/assignment-dto';
import { AssignmentService } from '../../services/assignment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})

export class AssignmentDetailsComponent implements OnInit {

  id!: number;

  assignmentDTO!: AssignmentDTO;

  constructor(private route: ActivatedRoute, private router: Router,
    private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.assignmentDTO = new AssignmentDTO(0, 0, 0, 0, 0);

    this.id = this.route.snapshot.params['id'];
    
    this.assignmentService.getAssignmentById(this.id)
      .subscribe(data => {
        console.log(data);
        this.assignmentDTO = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['assignment/all']);
  }
}
