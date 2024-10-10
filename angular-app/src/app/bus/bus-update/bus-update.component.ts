import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../services/bus.service';
import { Bus } from '../../bus.model';

@Component({
  selector: 'app-bus-update',
  standalone: true,
  imports: [],
  templateUrl: './bus-update.component.html',
  styleUrl: './bus-update.component.css'
})

export class BusUpdateComponent implements OnInit {
  id!: number;
  bus: Bus = new Bus();

  constructor(private busService: BusService,
    private route: ActivatedRoute, private router: Router) { }

  private getBusById() {
    this.id = this.route.snapshot.params['id'];
    this.busService.getBusById(this.id).subscribe({
      next: (data) => {
        this.bus = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getBusById();
  }

  updateBus() {
    this.busService.updateBus(this.id, this.bus).subscribe({
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
    this.router.navigate(['/buses']);
  }

  onSubmit() {
    console.log(this.bus);
    this.updateBus();
  }
}
