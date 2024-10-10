import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../model/driver.model';

@Component({
  selector: 'app-driver-update',
  standalone: true,
  imports: [],
  templateUrl: './driver-update.component.html',
  styleUrl: './driver-update.component.css'
})

export class DriverUpdateComponent implements OnInit {
  id!: number;
  driver: Driver = new Driver();

  constructor(private driverService: DriverService,
    private route: ActivatedRoute, private router: Router) { }

  private getDriverById() {
    this.id = this.route.snapshot.params['id'];
    this.driverService.getDriverById(this.id).subscribe({
      next: (data) => {
        this.driver = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getDriverById();
  }

  updateDriver() {
    this.driverService.updateDriver(this.id, this.driver).subscribe({
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
    this.updateDriver();
  }
}
