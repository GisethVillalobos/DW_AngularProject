import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus.model';
import { BusService } from '../../services/bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-create',
  standalone: true,
  imports: [],
  templateUrl: './bus-create.component.html',
  styleUrl: './bus-create.component.css'
})

export class BusCreateComponent implements OnInit {

  bus: Bus = new Bus();

  constructor(private busService: BusService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBus() {
    this.busService.createBus(this.bus).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToBusList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToBusList() {
    this.router.navigate(['/buss']);
  }

  onSubmit() {
    console.log(this.bus);
    this.saveBus();
  }
}