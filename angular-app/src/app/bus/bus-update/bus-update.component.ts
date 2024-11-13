import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDTO } from '../../dto/bus-dto';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-bus-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './bus-update.component.html',
  styleUrl: './bus-update.component.css'
})

export class BusUpdateComponent implements OnInit {
  id!: number;

  busDTO: BusDTO = new BusDTO(0, "", "");

  constructor(private busService: BusService,
    private route: ActivatedRoute, private router: Router) { }

  private getBusById() {
    this.id = this.route.snapshot.params['id'];
    this.busService.getBusById(this.id).subscribe({
      next: (data) => {
        this.busDTO = data;
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
    this.busService.updateBus(this.id, this.busDTO).subscribe({
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
    console.log(this.busDTO);
    this.updateBus();
  }
}
