import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../../models/contact";
import {Sort} from "@angular/material";

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  @Input() contacts: IContact[]
  @Output() onSort = new EventEmitter<Sort>()
  constructor() { }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    this.onSort.emit(sort);
  }

}
