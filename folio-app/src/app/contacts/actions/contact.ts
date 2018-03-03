import { Action } from '@ngrx/store';
import { IContact } from '../models/contact';

export enum ContactActionTypes {
  Search = '[Contact] Search',
  SearchComplete = '[Contact] Search Complete',
  SearchError = '[Contact] Search Error',
  Load = '[Contact] Load',
  Select = '[Contact] Select',
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

export class Load implements Action {
  readonly type = ContactActionTypes.Load;

  constructor(public payload: IContact) {}
}

export class Select implements Action {
  readonly type = ContactActionTypes.Select;

  constructor(public payload: string) {}
}

export type ContactActions = Search | SearchComplete | SearchError | Load | Select;
