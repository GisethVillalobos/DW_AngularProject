import { Component, OnInit } from '@angular/core';
import { Bus } from '../../model/bus.model';
import { BusService } from '../../services/bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [],
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})

export class BusListComponent implements OnInit {
  buses: Bus[] | undefined;
  constructor(private busService: BusService, private router: Router) {
  }
  ngOnInit(): void {
    this.getBuss();
  }
  private getBuss() {
    this.busService.getBusList().subscribe(data => {
      this.buses = data;
    });
  }
  updateBus(idBus: number) {
    this.router.navigate(['update-bus', idBus]);
  }
  deleteBus(idBus: number) {
    this.busService.deleteBus(idBus).subscribe(data => {
      console.log(data);
      this.getBuss();
    });
  }
}