import { SET_FILTER_TYPE } from '../actions/types';

const initialState = {
  filterBy: ["0", "100"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;
  }
};