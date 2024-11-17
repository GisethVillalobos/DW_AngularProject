import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleDTO } from '../../dto/schedule-dto';
import { ScheduleService } from '../../services/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})

export class ScheduleListComponent implements OnInit {

  schedules: ScheduleDTO[] | undefined;

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

  createSchedule() {
    this.router.navigate(['schedule/create']);
  }

  readSchedule(idSchedule: number) {
    this.router.navigate(['schedule/read', idSchedule]);
  }

  updateSchedule(idSchedule: number) {
    this.router.navigate(['schedule/update', idSchedule]);
  }

  deleteSchedule(idSchedule: number) {
    this.scheduleService.deleteSchedule(idSchedule).subscribe(data => {
      console.log(data);
      this.getSchedules();
    });
  }
}
