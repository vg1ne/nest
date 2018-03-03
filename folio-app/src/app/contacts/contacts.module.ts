import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {containers} from './containers';
import {SharedModule} from "../shared/shared.module";
import {services} from "./services";
import {CoreModule} from "../core/core.module";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/contact.collection";
import {CollectionEffects} from "./effects/contacts.collection";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,

    StoreModule.forFeature('contacts', reducer),
    EffectsModule.forFeature([CollectionEffects]),
  ],
  declarations: [
    ...containers,
  ],
  providers: [
    ...services,
  ],
  exports: [
    ...containers,
  ]
})
export class ContactsModule { }
