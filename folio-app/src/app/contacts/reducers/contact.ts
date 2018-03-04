import {
  ContactActions,
  ContactActionTypes
} from './../actions/contact';

export interface ContactState {
  currentPage: number;
  sortBy: string;
  sortOrder: string;
  itemsPerPage: number;
}

const initialState: ContactState = {
  currentPage: 0,
  sortBy: 'id',
  sortOrder: 'desc',
  itemsPerPage: 10
};

export function reducer(
  state = initialState,
  action: ContactActions
): ContactState {
  switch (action.type) {
    case ContactActionTypes.SortingChage: {
      return {
        ...state,
        currentPage: 0,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder
      };
    }

    case ContactActionTypes.PageChange: {
      return {
        ...state,
        currentPage: action.payload.pageIndex,
        itemsPerPage: action.payload.pageSize
      };
    }

    case ContactActionTypes.ItemsPerPageChange: {
      return {
        ...state,
        itemsPerPage: action.payload.length,
      };
    }

    default: {
      return state;
    }
  }
}

export const getContactState = (state: ContactState) => state;
