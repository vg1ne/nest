import {
  CollectionActionTypes,
  CollectionActions,
} from './../actions/contact.collection';
import {IContact} from "../models/contact";

export interface State {
  loaded: boolean;
  loading: boolean;
  contacts: IContact[];
  length: number;
}

const initialState: State = {
  loaded: false,
  loading: false,
  contacts: [],
  length: 0
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
        contacts: action.payload.items,
        length: action.payload.length
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getContacts = (state: State) => {
  return {
    contacts: state.contacts,
    length: state.length
  }
};
