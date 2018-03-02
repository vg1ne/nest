import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containers } from './containers';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ...containers,
  ],
  exports: [
    ...containers,
  ]
})
export class DashboardModule { }
