import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverDTO } from '../../dto/driver-dto';
import { DriverService } from '../../services/driver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})

export class DriverDetailsComponent implements OnInit {

  id!: number;
  
  driverDTO!: DriverDTO; 

  constructor(private route: ActivatedRoute, private router: Router,
    private driverService: DriverService) { }

  ngOnInit() {
    this.driverDTO = new DriverDTO(0, "", "", "", "");

    this.id = this.route.snapshot.params['id'];
    
    this.driverService.getDriverById(this.id)
      .subscribe(data => {
        console.log(data);
        this.driverDTO = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['driver/all']);
  }
}
