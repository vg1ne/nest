import {Component, OnInit} from '@angular/core';
import {PageEvent, Sort} from "@angular/material";
import {
  ContactsState, selectContact, selectContactsResponse, selectLoadingState,
} from "../../reducers";
import {Load} from "../../actions/contact.collection";
import {Store} from "@ngrx/store";
import {IContact} from "../../models/contact";
import {Observable} from "rxjs/Observable";
import {ContactState} from "../../reducers/contact";
import {PageChange, SortingChange} from "../../actions/contact";
import {DefaultRequestParams} from "../../models/request-params";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private contactsResponse$: Observable<{contacts: IContact[], length: number}>;
  private pageOptions$: Observable<ContactState>;
  private isLoading$: Observable<boolean>;
  pageSizeOptions = [5, 10, 25, 100];
  title = 'External contacts';

  constructor(private store$: Store<ContactsState>) {
    this.contactsResponse$ = store$.select(selectContactsResponse);
    this.pageOptions$ = store$.select(selectContact);
    this.isLoading$ = store$.select(selectLoadingState);
  }

  ngOnInit() {
    this.store$.dispatch(new Load(new DefaultRequestParams()))
  }

  onSort(sort: Sort) {
    this.store$.dispatch(new SortingChange({
      sortBy: sort.active,
      sortOrder: sort.direction
    }))
  }

  onPageChange(page: PageEvent) {
    this.store$.dispatch(new PageChange(page))
  }
}
