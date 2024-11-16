import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteDTO } from '../../dto/route-dto';
import { RouteService } from '../../services/route.service';
import { compileOpaqueAsyncClassMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-create',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './route-create.component.html',
  styleUrl: './route-create.component.css'
})

export class RouteCreateComponent implements OnInit {

    // Stations available
    stationsAv: string[] = ['Station A', 'Station B', 'Station C', 'Station D', 'Station E', 'Station F', 'Station G'];
    selectedStations: { [key: string]: boolean } = {};

  routeDTO: RouteDTO = new RouteDTO(0, "", ["", "", ""]);

  constructor(private routeService: RouteService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRoute() {

    this.routeDTO.stations = Object.keys(this.selectedStations)
    .filter(station => this.selectedStations[station]);

    this.routeService.createRoute(this.routeDTO).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToRouteList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToRouteList() {
    this.router.navigate(['/route/all']);
  }

  onSubmit() {
    console.log(this.routeDTO);
    this.saveRoute();
  }
}
