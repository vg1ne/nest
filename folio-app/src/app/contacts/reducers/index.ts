import {getContacts, State as ContactCollectionState} from "./contact.collection"
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface ContactsState {
  collection: ContactCollectionState;
}

export const contactsState = createFeatureSelector('contacts');
export const selectContacts = createSelector(contactsState, getContacts)
