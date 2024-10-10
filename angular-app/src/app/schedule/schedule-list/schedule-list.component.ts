import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../model/schedule.model';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  standalone: true,
  imports: [],
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})

export class ScheduleListComponent implements OnInit {
  schedules: Schedule[] | undefined;
  constructor(private scheduleService: ScheduleService, private router: Router) {
  }
  ngOnInit(): void {
    this.getSchedules();
  }
  private getSchedules() {
    this.scheduleService.getScheduleList().subscribe(data => {
      this.schedules = data;
    });
  }
  updateSchedule(idSchedule: number) {
    this.router.navigate(['update-schedule', idSchedule]);
  }
  deleteSchedule(idSchedule: number) {
    this.scheduleService.deleteSchedule(idSchedule).subscribe(data => {
      console.log(data);
      this.getSchedules();
    });
  }
}