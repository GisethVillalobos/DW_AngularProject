import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-bus-details',
  standalone: true,
  imports: [],
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})

export class BusDetailsComponent implements OnInit {

  id!: number;
  bus!: Bus;

  constructor(private route: ActivatedRoute, private router: Router,
    private busService: BusService) { }

  ngOnInit() {
    this.bus = new Bus();

    this.id = this.route.snapshot.params['id'];
    
    this.busService.getBusById(this.id)
      .subscribe(data => {
        console.log(data);
        this.bus = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['buses']);
  }
}
