import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'

import {MatSelectModule} from '@angular/material/select';

import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    RouterModule
  ],
  declarations: [
    components,
  ],
  exports: [
    components,
    RouterModule,
  ]
})
export class CoreModule { }
