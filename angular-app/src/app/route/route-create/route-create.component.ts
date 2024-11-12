import { Component, OnInit } from '@angular/core';
import { Route } from '../../model/route.model';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';
import { RouteDTO } from '../../dto/route-dto';

@Component({
  selector: 'app-route-create',
  standalone: true,
  imports: [],
  templateUrl: './route-create.component.html',
  styleUrl: './route-create.component.css'
})

export class RouteCreateComponent implements OnInit {

  routeDTO: RouteDTO = new RouteDTO(null, "", ["", "", ""]);

  constructor(private routeService: RouteService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRoute() {
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
    this.router.navigate(['/routes']);
  }

  onSubmit() {
    console.log(this.routeDTO);
    this.saveRoute();
  }
}
