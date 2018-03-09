import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../../models/contact";
import {Sort} from "@angular/material";
import {ContactState} from "../../reducers/contact";

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  // TODO: provide pageOptions$ binding
  @Input() contacts: IContact[]
  @Input() pageOptions: ContactState
  @Output() onSort = new EventEmitter<Sort>()
  constructor() { }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    this.onSort.emit(sort);
  }
}
