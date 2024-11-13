import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteDTO } from '../../dto/route-dto';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-route-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './route-create.component.html',
  styleUrl: './route-create.component.css'
})

export class RouteCreateComponent implements OnInit {

  routeDTO: RouteDTO = new RouteDTO(0, "", ["", "", ""]);

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
