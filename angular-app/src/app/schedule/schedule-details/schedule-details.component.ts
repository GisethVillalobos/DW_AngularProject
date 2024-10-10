import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../model/schedule.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule-details',
  standalone: true,
  imports: [],
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})

export class ScheduleDetailsComponent implements OnInit {

  id!: number;
  schedule!: Schedule;

  constructor(private scheduleService: ScheduleService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.schedule = new Schedule();

    this.id = this.route.snapshot.params['id'];
    
    this.scheduleService.getScheduleById(this.id)
      .subscribe(data => {
        console.log(data);
        this.schedule = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['schedules']);
  }
}
