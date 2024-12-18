import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusDTO } from '../../dto/bus-dto';
import { BusService } from '../../services/bus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})

export class BusListComponent implements OnInit {
  
  buses: BusDTO[] | undefined;
  
  constructor(private busService: BusService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.getBuses();
  }
  
  private getBuses() {
    this.busService.getBusList().subscribe(data => {
      this.buses = data;
    });
  }

  createBus() {
    this.router.navigate(['bus/create']);
  }

  readBus(idBus: number) {
    this.router.navigate(['bus/read', idBus]);
  }
  
  updateBus(idBus: number) {
    this.router.navigate(['bus/update', idBus]);
  }
  
  deleteBus(idBus: number) {
    this.busService.deleteBus(idBus).subscribe(data => {
      console.log(data);
      this.getBuses();
    });
  }
}