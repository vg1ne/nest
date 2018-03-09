import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Sort} from "@angular/material";
import {DefaultRequestParams, IRequestParams} from "../models/request-params";

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  getContacts(requestParams:IRequestParams) {
    let params = new HttpParams()
      .set('currentPage', requestParams.currentPage.toString())
      .set('sortBy', requestParams.sortBy)
      .set('sortOrder', requestParams.sortOrder)
      .set('itemsPerPage', requestParams.itemsPerPage.toString());
    return this.http.get('api/contacts', { params: params })
  }

}
