import { Injectable } from '@angular/core';
import {Action, Store} from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ContactActionTypes} from "../actions/contact";

import {
  LoadFail,
  LoadSuccess,
  CollectionActionTypes,
} from './../actions/contact.collection';
import { IContact } from '../models/contact';
import {switchMap, map, catchError, mergeMap, withLatestFrom} from 'rxjs/operators';
import {ContactsService} from "../services/contacts.service";
import {ContactsState, selectContact} from "../reducers";
import {IContactsResponse} from "../models/contacts-response.model";

@Injectable()
export class CollectionEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load),
    switchMap((action) =>
      this.contactsService
        .getContacts(action['payload'])
        .pipe(
          map((contacts: IContactsResponse) => new LoadSuccess(contacts)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  loadOnPageChange$: Observable<Action> = this.actions$.pipe(
    ofType(ContactActionTypes.PageChange,
      ContactActionTypes.SortingChage),
    withLatestFrom(this.store$.select(selectContact)),
    switchMap((arg) =>
      this.contactsService
        .getContacts(arg[1])
        .pipe(
          map((contacts: IContactsResponse) => new LoadSuccess(contacts)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(private actions$: Actions,
              private contactsService: ContactsService,
              private store$: Store<ContactsState>) {}
}
