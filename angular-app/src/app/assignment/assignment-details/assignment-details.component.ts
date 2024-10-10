import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../model/assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-assignment-details',
  standalone: true,
  imports: [],
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})

export class AssignmentDetailsComponent implements OnInit {

  id!: number;
  assignment!: Assignment;

  constructor(private route: ActivatedRoute, private router: Router,
    private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.assignment = new Assignment();

    this.id = this.route.snapshot.params['id'];
    
    this.assignmentService.getAssignmentById(this.id)
      .subscribe(data => {
        console.log(data);
        this.assignment = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['assignments']);
  }
}
