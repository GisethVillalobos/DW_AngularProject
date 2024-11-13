import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteDTO } from '../../dto/route-dto';
import { RouteService } from '../../services/route.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})

export class RouteListComponent implements OnInit {

  routes: RouteDTO[] | undefined;
  
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
    this.router.navigate(['route/update', idRoute]);
  }
  
  deleteRoute(idRoute: number) {
    this.routeService.deleteRoute(idRoute).subscribe(data => {
      console.log(data);
      this.getRoutes();
    });
  }
}