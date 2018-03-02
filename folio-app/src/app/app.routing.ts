import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component'
import { Routes } from '@angular/router'
import {AdminComponent} from './admin/containers/admin/admin.component';
import {EventsComponent} from './events/containers/events/events.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: 'dashboard' }
];
