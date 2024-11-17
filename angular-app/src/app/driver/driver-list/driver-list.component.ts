import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverDTO } from '../../dto/driver-dto';
import { DriverService } from '../../services/driver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})

export class DriverListComponent implements OnInit {
  
  drivers: DriverDTO[] | undefined;
  
  constructor(private driverService: DriverService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.getDrivers();
  }
  
  private getDrivers() {
    this.driverService.getDriverList().subscribe(data => {
      this.drivers = data;
    });
  }

  createDriver() {
    this.router.navigate(['driver/create']);
  }

  readDriver(idDriver: number) {
    this.router.navigate(['driver/read', idDriver]);
  }
  
  updateDriver(idDriver: number) {
    this.router.navigate(['driver/update', idDriver]);
  }
  
  deleteDriver(idDriver: number) {
    this.driverService.deleteDriver(idDriver).subscribe(data => {
      console.log(data);
      this.getDrivers();
    });
  }
}