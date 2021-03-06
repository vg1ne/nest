import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module'
import {RouterModule, Routes} from '@angular/router'
import {DashboardModule} from './dashboard/dashboard.module'
import {appRoutes} from './app.routing'
import {AdminModule} from './admin/admin.module';
import {EventsModule} from './events/events.module';
import {ContactsModule} from './contacts/contacts.module';
import {SettingsModule} from './settings/settings.module';
import {TasksModule} from './tasks/tasks.module';
import {FilesModule} from './files/files.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      router: routerReducer
    }),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router' // name of reducer key
    // }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    BrowserAnimationsModule,

    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),


    CoreModule,

    DashboardModule,
    AdminModule,
    EventsModule,
    ContactsModule,
    SettingsModule,
    TasksModule,
    FilesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
