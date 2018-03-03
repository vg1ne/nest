import {
  ContactActions,
  ContactActionTypes
} from './../actions/contact';

export interface ContactState {
  currentPage: number;
  sortBy: string;
  sortOrder: string;
}

const initialState: ContactState = {
  currentPage: 1,
  sortBy: 'id',
  sortOrder: 'desc'
};

export function reducer(
  state = initialState,
  action: ContactActions
): ContactState {
  switch (action.type) {
    case ContactActionTypes.SortingChage: {
      return {
        ...state,
        currentPage: 1,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder
      };
    }

    case ContactActionTypes.PageChange: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getContactState = (state: ContactState) => state;
