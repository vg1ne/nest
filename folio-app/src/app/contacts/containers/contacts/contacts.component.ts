import {Component, OnInit} from '@angular/core';
import {Sort} from "@angular/material";
import {ContactsState, selectContacts} from "../../reducers";
import {Load} from "../../actions/contact.collection";
import {Store, select} from "@ngrx/store";
import {IContact} from "../../models/contact";
import {Observable} from "rxjs/Observable";
import {getContacts} from "../../reducers/contact.collection";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private contacts$: Observable<IContact[]>;

  constructor(private store$: Store<ContactsState>) {
    this.contacts$ = store$.select(selectContacts);
  }

  ngOnInit() {
    this.store$.dispatch(new Load())
  }

  sortData(sort: Sort) {
    console.log('sorting')
  }
}
