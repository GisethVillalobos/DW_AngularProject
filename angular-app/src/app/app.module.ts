import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentCreateComponent } from './assignment/assignment-create/assignment-create.component';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { AssignmentUpdateComponent } from './assignment/assignment-update/assignment-update.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';
import { BusDetailsComponent } from './bus/bus-details/bus-details.component';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { BusUpdateComponent } from './bus/bus-update/bus-update.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { RouteCreateComponent } from './route/route-create/route-create.component';
import { RouteDetailsComponent } from './route/route-details/route-details.component';
import { RouteListComponent } from './route/route-list/route-list.component';
import { RouteUpdateComponent } from './route/route-update/route-update.component';
import { ScheduleCreateComponent } from './schedule/schedule-create/schedule-create.component';
import { ScheduleDetailsComponent } from './schedule/schedule-details/schedule-details.component';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { ScheduleUpdateComponent } from './schedule/schedule-update/schedule-update.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AssignmentListComponent,
    AssignmentCreateComponent,
    AssignmentUpdateComponent,
    AssignmentDetailsComponent,
    BusListComponent,
    BusCreateComponent,
    BusUpdateComponent,
    BusDetailsComponent,
    DriverListComponent,
    DriverCreateComponent,
    DriverUpdateComponent,
    DriverDetailsComponent,
    RouteListComponent,
    RouteCreateComponent,
    RouteUpdateComponent,
    RouteDetailsComponent,
    ScheduleListComponent,
    ScheduleCreateComponent,
    ScheduleUpdateComponent,
    ScheduleDetailsComponent
  
  ],
  providers: []
})
export class AppModule { }
