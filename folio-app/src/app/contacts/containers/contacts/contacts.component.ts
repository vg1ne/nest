import {Component, OnInit} from '@angular/core';
import {Sort} from "@angular/material";
import {ContactsState, selectContact, selectContacts, selectLoadingState} from "../../reducers";
import {Load} from "../../actions/contact.collection";
import {Store} from "@ngrx/store";
import {IContact} from "../../models/contact";
import {Observable} from "rxjs/Observable";
import {ContactState} from "../../reducers/contact";
import {SortingChange} from "../../actions/contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private contacts$: Observable<IContact[]>;
  private contact$: Observable<ContactState>;
  private isLoading$: Store<boolean>;

  constructor(private store$: Store<ContactsState>) {
    this.contacts$ = store$.select(selectContacts);
    this.contact$ = store$.select(selectContact);
    this.isLoading$ = store$.select(selectLoadingState);
  }

  ngOnInit() {
    this.store$.dispatch(new Load())
  }

  onSort(sort: Sort) {
    this.store$.dispatch(new SortingChange(sort))
  }
}
