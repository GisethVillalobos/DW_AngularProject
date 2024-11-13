import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteDTO } from '../../dto/route-dto';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-route-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './route-update.component.html',
  styleUrl: './route-update.component.css'
})

export class RouteUpdateComponent implements OnInit {
  id!: number;

  routeDTO: RouteDTO = new RouteDTO(0, "", ["", "", ""]);

  constructor(private routeService: RouteService, private route: ActivatedRoute, private router: Router) { }

  private getRouteById() {
    this.id = this.route.snapshot.params['id'];
    this.routeService.getRouteById(this.id).subscribe({
      next: (data) => {
        this.routeDTO = data;
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
    this.router.navigate(['/routes']);
  }

  onSubmit() {
    console.log(this.routeDTO);
    this.updateRoute();
  }
}
