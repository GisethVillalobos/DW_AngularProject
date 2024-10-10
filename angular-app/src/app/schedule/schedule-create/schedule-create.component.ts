import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../schedule.model';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-create',
  standalone: true,
  imports: [],
  templateUrl: './schedule-create.component.html',
  styleUrl: './schedule-create.component.css'
})

export class ScheduleCreateComponent implements OnInit {

  schedule: Schedule = new Schedule();

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSchedule() {
    this.scheduleService.createSchedule(this.schedule).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToScheduleList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToScheduleList() {
    this.router.navigate(['/schedules']);
  }

  onSubmit() {
    console.log(this.schedule);
    this.saveSchedule();
  }
}
