import {Component, OnInit} from '@angular/core';
import {Sort} from "@angular/material";
import {ContactsState} from "../../reducers";
import {Load} from "../../actions/contact.collection";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];
  constructor(private store$: Store<ContactsState>) {
  }

  ngOnInit() {
    this.store$.dispatch(new Load())
  }

  sortData(sort: Sort) {
    console.log('sorting')
  }
}
