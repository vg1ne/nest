import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../../models/contact";

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  @Input() contacts: IContact[]
  constructor() { }

  ngOnInit() {
  }

  sortData() {
    console.log('sort')
  }

}
