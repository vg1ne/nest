import {
  CollectionActionTypes,
  CollectionActions,
} from './../actions/contact.collection';
import {IContact} from "../models/contact";

export interface State {
  loaded: boolean;
  loading: boolean;
  contacts: IContact[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  contacts: [],
};

export function reducer(
  state = initialState,
  action: CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case CollectionActionTypes.LoadSuccess: {
      return {
        loaded: true,
        loading: false,
        contacts: action.payload.map(contact => contact),
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.contacts;
