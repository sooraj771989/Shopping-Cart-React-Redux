import { SET_SORT_TYPE } from '../actions/types';

const initialState = {
  sortingType: ["price", "asc","1"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return {
        ...state,
        sortingType: action.payload
      };
    default:
      return state;
  }
};