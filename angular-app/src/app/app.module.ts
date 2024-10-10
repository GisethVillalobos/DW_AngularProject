import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { AssignmentCreateComponent } from './assignment/assignment-create/assignment-create.component';
import { FormsModule } from '@angular/forms';
import { AssignmentUpdateComponent } from './assignment/assignment-update/assignment-update.component';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';
import { BusUpdateComponent } from './bus/bus-update/bus-update.component';
import { BusDetailsComponent } from './bus/bus-details/bus-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { RouteListComponent } from './route/route-list/route-list.component';
import { RouteCreateComponent } from './route/route-create/route-create.component';
import { RouteUpdateComponent } from './route/route-update/route-update.component';
import { RouteDetailsComponent } from './route/route-details/route-details.component';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { ScheduleCreateComponent } from './schedule/schedule-create/schedule-create.component';
import { ScheduleUpdateComponent } from './schedule/schedule-update/schedule-update.component';
import { ScheduleDetailsComponent } from './schedule/schedule-details/schedule-details.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ScheduleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }