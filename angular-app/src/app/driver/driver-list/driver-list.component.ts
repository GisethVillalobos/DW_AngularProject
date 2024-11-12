import { Component, OnInit } from '@angular/core';
import { Driver } from '../../model/driver.model';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';
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
  
  drivers: Driver[] | undefined;
  
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
  
  updateDriver(idDriver: number) {
    this.router.navigate(['update-driver', idDriver]);
  }
  
  deleteDriver(idDriver: number) {
    this.driverService.deleteDriver(idDriver).subscribe(data => {
      console.log(data);
      this.getDrivers();
    });
  }
}