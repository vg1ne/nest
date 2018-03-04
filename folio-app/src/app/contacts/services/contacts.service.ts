import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Sort} from "@angular/material";
import {DefaultRequestParams} from "../models/request-params";

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  getContacts(requestParams:DefaultRequestParams) {
    // TODO: fix error on items per page change
    let params = new HttpParams()
      .set('currentPage', requestParams.currentPage.toString())
      .set('sortBy', requestParams.sortBy)
      .set('sortOrder', requestParams.sortOrder);
    return this.http.get('api/contacts', { params: params })
  }

}
