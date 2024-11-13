import { Component, OnInit } from '@angular/core';
import { Route } from '../../model/route.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../services/route.service';
import { RouteDTO } from '../../dto/route-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})

export class RouteDetailsComponent implements OnInit {

  id!: number;

  routeDTO!: RouteDTO;

  constructor(private routeService: RouteService,
    private routeParam: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeDTO = new RouteDTO(0, "", ["", "", ""]);

    this.id = this.routeParam.snapshot.params['id'];
    
    this.routeService.getRouteById(this.id)
      .subscribe(data => {
        console.log(data);
        this.routeDTO = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['routes']);
  }
}
