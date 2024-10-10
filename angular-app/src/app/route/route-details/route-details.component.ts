import { Component, OnInit } from '@angular/core';
import { Route } from '../../model/route.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-route-details',
  standalone: true,
  imports: [],
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})

export class RouteDetailsComponent implements OnInit {

  id!: number;
  route!: Route;

  constructor(private routeService: RouteService,
    private routeParam: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route = new Route();

    this.id = this.routeParam.snapshot.params['id'];
    
    this.routeService.getRouteById(this.id)
      .subscribe(data => {
        console.log(data);
        this.route = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['routes']);
  }
}
