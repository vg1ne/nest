import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sort} from "@angular/material";

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  getContacts(param?:Sort) {
    return this.http.get('api/contacts')
  }

}
