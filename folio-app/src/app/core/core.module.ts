import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'

import {MatSelectModule} from '@angular/material/select';

import { components } from './components';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    RouterModule,
    HttpClientModule
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
