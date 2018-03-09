import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {components} from "./index";
import {MatButtonModule, MatPaginatorModule, MatSortModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
