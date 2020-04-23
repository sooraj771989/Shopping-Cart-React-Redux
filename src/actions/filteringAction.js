import { SET_FILTER_TYPE } from "./types";

export const filterPrices = result => {
 
  const {max, min} = result;
  const filterFilter = [];
  filterFilter[0] = result[0];
  filterFilter[1] = result[1];
  return {
    type: SET_FILTER_TYPE,
    payload: filterFilter
  };
};
