import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusDTO } from '../../dto/bus-dto';
import { BusService } from '../../services/bus.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bus-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './bus-create.component.html',
  styleUrl: './bus-create.component.css'
})

export class BusCreateComponent implements OnInit {

  busDTO: BusDTO = new BusDTO(0, "", "");

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
    this.router.navigate(['/bus/all']);
  }

  onSubmit() {
    console.log(this.busDTO);
    this.saveBus();
  }
}