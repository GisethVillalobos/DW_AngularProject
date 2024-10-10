import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../services/route.service';
import { Route } from '../../route.model';

@Component({
  selector: 'app-route-update',
  standalone: true,
  imports: [],
  templateUrl: './route-update.component.html',
  styleUrl: './route-update.component.css'
})

export class RouteUpdateComponent implements OnInit {
  id!: number;
  routeE: Route = new Route();

  constructor(private routeService: RouteService, private route: ActivatedRoute, private router: Router) { }

  private getRouteById() {
    this.id = this.route.snapshot.params['id'];
    this.routeService.getRouteById(this.id).subscribe({
      next: (data) => {
        this.routeE = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getRouteById();
  }

  updateRoute() {
    this.routeService.updateRoute(this.id, this.routeE).subscribe({
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
    console.log(this.route);
    this.updateRoute();
  }
}
