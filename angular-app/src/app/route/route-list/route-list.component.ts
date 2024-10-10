import { Component, OnInit } from '@angular/core';
import { Route } from '../../route.model';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-list',
  standalone: true,
  imports: [],
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})

export class RouteListComponent implements OnInit {
  routes: Route[] | undefined;
  constructor(private routeService: RouteService, private router: Router) {
  }
  ngOnInit(): void {
    this.getRoutes();
  }
  private getRoutes() {
    this.routeService.getRouteList().subscribe(data => {
      this.routes = data;
    });
  }
  updateRoute(idRoute: number) {
    this.router.navigate(['update-route', idRoute]);
  }
  deleteRoute(idRoute: number) {
    this.routeService.deleteRoute(idRoute).subscribe(data => {
      console.log(data);
      this.getRoutes();
    });
  }
}