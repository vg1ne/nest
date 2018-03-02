import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main-header></app-main-header>
    <section class="main-content">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>`
})
export class AppComponent {
  title = 'app';
}
