import { Routes } from '@angular/router';
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

export const routes: Routes = [

    //Main
    { path: 'main', component: AppComponent},
    { path: '', pathMatch: 'full', redirectTo: 'main'},

    // Assignments
    { path: 'assignment/create', component: AssignmentCreateComponent},
    { path: 'assignment/read/:id', component: AssignmentDetailsComponent},
    { path: 'assignment/all', component: AssignmentListComponent},
    { path: 'assignment/update/:id', component: AssignmentUpdateComponent},

    // Buses
    { path: 'bus/create', component: BusCreateComponent},
    { path: 'bus/read/:id', component: BusDetailsComponent},
    { path: 'bus/all', component: BusListComponent},
    { path: 'bus/update/:id', component: BusUpdateComponent},

   // Drivers
   { path: 'driver/create', component: DriverCreateComponent},
   { path: 'driver/read/:id', component: DriverDetailsComponent},
   { path: 'driver/all', component: DriverListComponent},
   { path: 'driver/update/:id', component: DriverUpdateComponent},

   // Routes
    { path: 'route/create', component: RouteCreateComponent},
    { path: 'route/read/:id', component: RouteDetailsComponent},
    { path: 'route/all', component: RouteListComponent},
    { path: 'route/update/:id', component: RouteUpdateComponent},

    // Schedules
    { path: 'schedule/create', component: ScheduleCreateComponent},
    { path: 'schedule/read/:id', component: ScheduleDetailsComponent},
    { path: 'schedule/all', component: ScheduleListComponent},
    { path: 'schedule/update/:id', component: ScheduleUpdateComponent}
];
