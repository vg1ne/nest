import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  declarations: [
    components,
  ],
  exports: [
    components
  ]
})
export class CoreModule { }
