import {DashboardComponent} from './dashboard/containers/dashboard/dashboard.component'
import {Routes} from '@angular/router'
import {AdminComponent} from './admin/containers/admin/admin.component';
import {EventsComponent} from './events/containers/events/events.component';
import {ContactsComponent} from './contacts/containers/contacts/contacts.component';
import {TasksComponent} from './tasks/containers/tasks/tasks.component';
import {FilesComponent} from './files/containers/files/files.component';
import {SettingsComponent} from './settings/containers/settings/settings.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'events', component: EventsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'files', component: FilesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: 'dashboard'}
];
