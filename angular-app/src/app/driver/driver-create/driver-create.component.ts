import { Component, OnInit } from '@angular/core';
import { Driver } from '../../model/driver.model';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-create',
  standalone: true,
  imports: [],
  templateUrl: './driver-create.component.html',
  styleUrl: './driver-create.component.css'
})

export class DriverCreateComponent implements OnInit {

  driver: Driver = new Driver();

  constructor(private driverService: DriverService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDriver() {
    this.driverService.createDriver(this.driver).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToDriverList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToDriverList() {
    this.router.navigate(['/drivers']);
  }

  onSubmit() {
    console.log(this.driver);
    this.saveDriver();
  }
}
