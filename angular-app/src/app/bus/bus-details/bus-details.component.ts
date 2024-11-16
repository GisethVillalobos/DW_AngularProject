import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDTO } from '../../dto/bus-dto';
import { BusService } from '../../services/bus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})

export class BusDetailsComponent implements OnInit {

  id!: number;

  busDTO!: BusDTO;

  constructor(private route: ActivatedRoute, private router: Router,
    private busService: BusService) { }

  ngOnInit() {
    this.busDTO = new BusDTO(0, "", "");

    this.id = this.route.snapshot.params['id'];
    
    this.busService.getBusById(this.id)
      .subscribe(data => {
        console.log(data);
        this.busDTO = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['bus/all']);
  }
}
