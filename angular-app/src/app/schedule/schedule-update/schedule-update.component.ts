import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { Schedule } from '../../model/schedule.model';

@Component({
  selector: 'app-schedule-update',
  standalone: true,
  imports: [],
  templateUrl: './schedule-update.component.html',
  styleUrl: './schedule-update.component.css'
})

export class ScheduleUpdateComponent implements OnInit {
  id!: number;
  schedule: Schedule = new Schedule();

  constructor(private scheduleService: ScheduleService, private route: ActivatedRoute, private router: Router) { }

  private getScheduleById() {
    this.id = this.route.snapshot.params['id'];
    this.scheduleService.getScheduleById(this.id).subscribe({
      next: (data) => {
        this.schedule = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getScheduleById();
  }

  updateSchedule() {
    this.scheduleService.updateSchedule(this.id, this.schedule).subscribe({
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
    this.updateSchedule();
  }
}
