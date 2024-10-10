import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { RouteListComponent } from './route/route-list/route-list.component';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    AssignmentListComponent,
    BusListComponent,
    RouteListComponent,
    ScheduleListComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
