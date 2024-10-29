import { Component, OnInit } from '@angular/core';
import { Bus } from '../../model/bus.model';
import { BusService } from '../../services/bus.service';
import { Router } from '@angular/router';
import { BusDTO } from '../../dto/bus-dto';

@Component({
  selector: 'app-bus-create',
  standalone: true,
  imports: [],
  templateUrl: './bus-create.component.html',
  styleUrl: './bus-create.component.css'
})

export class BusCreateComponent implements OnInit {

  busDTO: BusDTO = new BusDTO(null, '', '', null);
  bus: Bus = new Bus();

  constructor(private busService: BusService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBus() {
    this.busService.createBus(this.busDTO).subscribe({
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
    console.log(this.busDTO);
    this.saveBus();
  }
}