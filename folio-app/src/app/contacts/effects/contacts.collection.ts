import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ContactActionTypes, ContactActions} from "../actions/contact";

import {
  CollectionActions,
  LoadFail,
  LoadSuccess,
  CollectionActionTypes,
} from './../actions/contact.collection';
import { IContact } from '../models/contact';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import {ContactsService} from "../services/contacts.service";

@Injectable()
export class CollectionEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load,
      ContactActionTypes.SortingChage),
    switchMap(() =>
      this.contactsService
        .getContacts()
        .pipe(
          map((contacts: IContact[]) => new LoadSuccess(contacts)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(private actions$: Actions,
              private contactsService: ContactsService) {}
}
