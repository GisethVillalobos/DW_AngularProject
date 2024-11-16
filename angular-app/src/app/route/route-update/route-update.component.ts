import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteDTO } from '../../dto/route-dto';
import { RouteService } from '../../services/route.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-update',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './route-update.component.html',
  styleUrl: './route-update.component.css'
})

export class RouteUpdateComponent implements OnInit {
  id!: number;

  stationsAv: string[] = ['Station A', 'Station B', 'Station C', 'Station D', 'Station F', 'Station G'];
  selectedStations: { [key: string]: boolean } = {};
  routeDTO: RouteDTO = new RouteDTO(0, "", ["", "", ""]);

  constructor(private routeService: RouteService, private route: ActivatedRoute, private router: Router) { }

  private getRouteById() {
    this.id = this.route.snapshot.params['id'];
    this.routeService.getRouteById(this.id).subscribe({
      next: (data) => {
        this.routeDTO = data;
        this.setSelectedStations();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getRouteById();
  }

  setSelectedStations() {
    this.stationsAv.forEach(station => {
      this.selectedStations[station] = this.routeDTO.stations.includes(station);
    });
  }

  updateRoute() {
    this.routeService.updateRoute(this.id, this.routeDTO).subscribe({
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
    const selectedStationsArray = Object.keys(this.selectedStations).filter(station => this.selectedStations[station]);
    this.routeDTO.stations = selectedStationsArray;
    console.log(this.routeDTO);
    this.updateRoute();
  }
}
