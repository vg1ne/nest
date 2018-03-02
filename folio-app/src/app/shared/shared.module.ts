import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {components} from "./index";

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ]
})
export class SharedModule { }
