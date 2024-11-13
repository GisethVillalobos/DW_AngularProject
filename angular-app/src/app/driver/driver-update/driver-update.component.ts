import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverDTO } from '../../dto/driver-dto';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './driver-update.component.html',
  styleUrl: './driver-update.component.css'
})

export class DriverUpdateComponent implements OnInit {
  id!: number;
  
  driverDTO: DriverDTO = new DriverDTO(0, "", "", "", "");

  constructor(private driverService: DriverService,
    private route: ActivatedRoute, private router: Router) { }

  private getDriverById() {
    this.id = this.route.snapshot.params['id'];
    this.driverService.getDriverById(this.id).subscribe({
      next: (data) => {
        this.driverDTO = data;
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
    this.driverService.updateDriver(this.id, this.driverDTO).subscribe({
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
    console.log(this.driverDTO);
    this.updateDriver();
  }
}
