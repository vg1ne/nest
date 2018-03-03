import {getContacts, getLoading, State as ContactCollectionState} from "./contact.collection"
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ContactState, getContactState} from "./contact";

export interface ContactsState {
  collection: ContactCollectionState;
  contact: ContactState;
}

export const contactsState = createFeatureSelector('contacts');
export const selectContacts = createSelector(contactsState, getContacts)
export const selectLoadingState = createSelector(contactsState, getLoading)

export const contactState = createFeatureSelector('contact');
export const selectContact = createSelector(contactsState, getContactState)
