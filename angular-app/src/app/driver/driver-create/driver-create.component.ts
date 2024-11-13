import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';
import { DriverDTO } from '../../dto/driver-dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driver-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './driver-create.component.html',
  styleUrl: './driver-create.component.css'
})

export class DriverCreateComponent implements OnInit {

  driverDTO: DriverDTO = new DriverDTO(0, "", "", "", "");

  constructor(private driverService: DriverService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDriver() {
    this.driverService.createDriver(this.driverDTO).subscribe({
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
    this.saveDriver();
  }
}
