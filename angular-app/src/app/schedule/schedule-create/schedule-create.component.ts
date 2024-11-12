import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../model/schedule.model';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScheduleDTO } from '../../dto/schedule-dto';

@Component({
  selector: 'app-schedule-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './schedule-create.component.html',
  styleUrl: './schedule-create.component.css'
})

export class ScheduleCreateComponent implements OnInit {

  scheduleDTO: ScheduleDTO = new ScheduleDTO(null, ["", "", ""], "", "");

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSchedule() {
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
    this.router.navigate(['/schedules']);
  }

  onSubmit() {
    console.log(this.scheduleDTO);
    this.saveSchedule();
  }
}
