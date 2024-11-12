import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { RouteListComponent } from './route/route-list/route-list.component';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';

const routes: Routes = [
  { path: 'assignments', component: AssignmentListComponent },
  { path: 'buses', component: BusListComponent },
  { path: 'drivers', component: DriverListComponent },
  { path: 'routes', component: RouteListComponent },
  { path: 'schedules', component: ScheduleListComponent },
  { path: '', redirectTo: '/assignments', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // No declarations needed for AppComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
