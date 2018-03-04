import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import {getContacts, getLoading, reducer as collectionReducer, State as ContactCollectionState} from "./contact.collection"
import {ContactState, getContactState, reducer as contactReducer} from "./contact";

export interface ContactsState {
  collection: ContactCollectionState;
  contact: ContactState;
}

export const reducers:ActionReducerMap<ContactsState> = {
  collection: collectionReducer,
  contact: contactReducer
}

export const contactsState = createFeatureSelector<ContactsState>('contacts');
export const contactCollectionState = createSelector(contactsState, state => state.collection)
export const selectContacts = createSelector(contactCollectionState, getContacts)
export const selectLoadingState = createSelector(contactCollectionState, getLoading)

export const contactState = createSelector(contactsState, state => state.contact);
export const selectContact = createSelector(contactState, getContactState)
export const selectCurrentPage = createSelector(contactState, state => state.currentPage)
export const selectItemsPerPage = createSelector(contactState, state => state.itemsPerPage)
export const selectSortOrder = createSelector(contactState, state => state.sortOrder)
export const selectSortBy = createSelector(contactState, state => state.sortBy)
