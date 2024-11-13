import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleDTO } from '../../dto/schedule-dto';
import { ScheduleService } from '../../services/schedule.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './schedule-update.component.html',
  styleUrl: './schedule-update.component.css'
})

export class ScheduleUpdateComponent implements OnInit {
  id!: number;

  scheduleDTO: ScheduleDTO = new ScheduleDTO(0, ["", "", ""], "", "");

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
    this.getScheduleById();
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
    this.router.navigate(['/schedules']);
  }

  onSubmit() {
    console.log(this.scheduleDTO);
    this.updateSchedule();
  }
}
