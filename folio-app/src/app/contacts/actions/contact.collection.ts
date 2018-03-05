import { Action } from '@ngrx/store';
import { IContact } from '../models/contact';
import {Sort} from "@angular/material";
import {DefaultRequestParams} from "../models/request-params";

export enum CollectionActionTypes {
  Load = '[Collection] Load',
  LoadSuccess = '[Collection] Load Success',
  LoadFail = '[Collection] Load Fail',
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = CollectionActionTypes.Load;
  constructor(public payload: DefaultRequestParams){}
}

export class LoadSuccess implements Action {
  readonly type = CollectionActionTypes.LoadSuccess;

  constructor(public payload: {items: IContact[], length: number}) {}
}

export class LoadFail implements Action {
  readonly type = CollectionActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type CollectionActions =
  | Load
  | LoadSuccess
  | LoadFail
  ;
