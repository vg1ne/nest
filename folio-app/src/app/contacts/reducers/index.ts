import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import {getContacts, getLoading, reducer as collectionReducer, State as ContactCollectionState} from "./contact.collection"
import {ContactState, getContactState, reducer as contactReducer} from "./contact";

export interface ContactsState {
  collection: ContactCollectionState;
  options: ContactState;
}

export const reducers:ActionReducerMap<ContactsState> = {
  collection: collectionReducer,
  options: contactReducer
}

export const contactsState = createFeatureSelector<ContactsState>('contacts');
export const contactCollectionState = createSelector(contactsState, state => state.collection)
export const selectContactsResponse = createSelector(contactCollectionState, getContacts)
export const selectLoadingState = createSelector(contactCollectionState, getLoading)

export const contactState = createSelector(contactsState, state => state.options);
export const selectContact = createSelector(contactState, getContactState)

