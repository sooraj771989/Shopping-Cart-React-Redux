import { SEARCH } from "../actions/types";

const searchState = { value: "" };

export const searchReducer = (state = searchState, action) => {
  switch (action.type) {
    case SEARCH: {
      const { value } = action;
      return { ...state, value };
    }
    default:
      return state;
  }
};
