import * as types from "./types";

export const getProducts = () => async dispatch => {
  const response = await fetch(
    "" //API Here
  );
  const data = await response.json();
  dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
};
