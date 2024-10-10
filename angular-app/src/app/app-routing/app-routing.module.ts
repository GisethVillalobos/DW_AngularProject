import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentListComponent } from '../assignment/assignment-list/assignment-list.component';
import { AssignmentUpdateComponent } from '../assignment/assignment-update/assignment-update.component';
import { AssignmentCreateComponent } from '../assignment/assignment-create/assignment-create.component';
import { CommonModule } from '@angular/common';
import { BusCreateComponent } from '../bus/bus-create/bus-create.component';
import { BusUpdateComponent } from '../bus/bus-update/bus-update.component';
import { BusListComponent } from '../bus/bus-list/bus-list.component';
import { DriverListComponent } from '../driver/driver-list/driver-list.component';
import { DriverCreateComponent } from '../driver/driver-create/driver-create.component';
import { DriverUpdateComponent } from '../driver/driver-update/driver-update.component';
import { RouteListComponent } from '../route/route-list/route-list.component';
import { RouteCreateComponent } from '../route/route-create/route-create.component';
import { RouteUpdateComponent } from '../route/route-update/route-update.component';
import { ScheduleListComponent } from '../schedule/schedule-list/schedule-list.component';
import { ScheduleCreateComponent } from '../schedule/schedule-create/schedule-create.component';
import { ScheduleUpdateComponent } from '../schedule/schedule-update/schedule-update.component';


const routes: Routes = [
  { path: '', redirectTo: 'assignments', pathMatch: 'full' },
  { path: 'assignments', component: AssignmentListComponent },
  { path: 'create-assignment', component: AssignmentCreateComponent },
  { path: 'update-assignment/:id', component: AssignmentUpdateComponent },
  { path: 'buses', component: BusListComponent },
  { path: 'create-bus', component: BusCreateComponent },
  { path: 'update-bus/:id', component: BusUpdateComponent },
  { path: 'drivers', component: DriverListComponent },
  { path: 'create-driver', component: DriverCreateComponent },
  { path: 'update-driver/:id', component: DriverUpdateComponent },
  { path: 'routes', component: RouteListComponent },
  { path: 'create-route', component: RouteCreateComponent },
  { path: 'update-route/:id', component: RouteUpdateComponent },
  { path: 'schedules', component: ScheduleListComponent },
  { path: 'create-schedule', component: ScheduleCreateComponent },
  { path: 'update-schedule/:id', component: ScheduleUpdateComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }