import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {containers} from './containers';
import {SharedModule} from "../shared/shared.module";
import {services} from "./services";
import {CoreModule} from "../core/core.module";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {CollectionEffects} from "./effects/contacts.collection";
import {components} from "./components";
import {reducers} from "./reducers";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,

    StoreModule.forFeature('contacts', reducers),
    EffectsModule.forFeature([CollectionEffects]),
  ],
  declarations: [
    ...containers,
    ...components,
  ],
  providers: [
    ...services,
  ],
  exports: [
    ...containers,
  ]
})
export class ContactsModule { }
