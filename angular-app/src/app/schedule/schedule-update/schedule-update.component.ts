import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleDTO } from '../../dto/schedule-dto';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule-update',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './schedule-update.component.html',
  styleUrl: './schedule-update.component.css'
})

export class ScheduleUpdateComponent implements OnInit {
  id!: number;

  availableDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays: { [key: string]: boolean } = {};
  scheduleDTO: ScheduleDTO = new ScheduleDTO(0, [], "", "");

  constructor(private scheduleService: ScheduleService, private route: ActivatedRoute, private router: Router) { }

  private getScheduleById() {
    this.id = this.route.snapshot.params['id'];
    this.scheduleService.getScheduleById(this.id).subscribe({
      next: (data) => {
        this.scheduleDTO = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.setSelectedDays();
    this.getScheduleById();
  }

  setSelectedDays() {
    this.availableDays.forEach(day => {
      this.selectedDays[day] = this.scheduleDTO.days.includes(day);
    });
  }

  updateSchedule() {
    this.scheduleService.updateSchedule(this.id, this.scheduleDTO).subscribe({
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
    const selectedDaysArray = Object.keys(this.selectedDays).filter(day => this.selectedDays[day]);
    this.scheduleDTO.days = selectedDaysArray;
    this.updateSchedule();
  }
}