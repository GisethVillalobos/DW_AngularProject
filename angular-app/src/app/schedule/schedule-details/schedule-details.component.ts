import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleDTO } from '../../dto/schedule-dto';
import { ScheduleService } from '../../services/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})

export class ScheduleDetailsComponent implements OnInit {

  id!: number;

  scheduleDTO!: ScheduleDTO;

  constructor(private scheduleService: ScheduleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.scheduleDTO = new ScheduleDTO(0, ["", "", ""], "", "");

    this.id = this.route.snapshot.params['id'];
    
    this.scheduleService.getScheduleById(this.id)
      .subscribe(data => {
        console.log(data);
        this.scheduleDTO = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['schedules']);
  }
}
