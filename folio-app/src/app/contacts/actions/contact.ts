import { Action } from '@ngrx/store';
import { IContact } from '../models/contact';
import {Sort} from "@angular/material";
import {IRequestParams} from "../models/request-params";
import {ISortOrderBy} from "../models/sort-order";

export enum ContactActionTypes {
  Search = '[Contact] Search',
  SearchComplete = '[Contact] Search Complete',
  SearchError = '[Contact] Search Error',
  PageChange = '[Contact] Change page number',
  ItemsPerPageChange = '[Contact] Items per page change',
  SortingChage = '[Contact] Change sort order'
}

export class Search implements Action {
  readonly type = ContactActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = ContactActionTypes.SearchComplete;

  constructor(public payload: IContact[]) {}
}

export class SearchError implements Action {
  readonly type = ContactActionTypes.SearchError;

  constructor(public payload: string) {}
}

export class PageChange implements Action {
  readonly type = ContactActionTypes.PageChange;
  constructor(public payload: number) {}
}

export class ItemsPerPageChange implements Action {
  readonly type = ContactActionTypes.ItemsPerPageChange;

  constructor(public payload: number) {}
}

export class SortingChange implements Action {
  readonly type = ContactActionTypes.SortingChage;

  constructor(public payload: ISortOrderBy) {}
}

export type ContactActions = Search
  | SearchComplete
  | SearchError
  | PageChange
  | ItemsPerPageChange
  | SortingChange
  ;
