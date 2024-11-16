import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleDTO } from '../../dto/schedule-dto';
import { ScheduleService } from '../../services/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-create',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './schedule-create.component.html',
  styleUrl: './schedule-create.component.css'
})

export class ScheduleCreateComponent implements OnInit {

  // Days of the week
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays: { [key: string]: boolean } = {};

  scheduleDTO: ScheduleDTO = new ScheduleDTO(0, [], "", "");

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSchedule() {

    this.scheduleDTO.days = Object.keys(this.selectedDays)
    .filter(day => this.selectedDays[day]);

    this.scheduleService.createSchedule(this.scheduleDTO).subscribe({
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
    this.router.navigate(['/schedule/all']);
  }

  onSubmit() {
    console.log(this.scheduleDTO);
    this.saveSchedule();
  }
}
