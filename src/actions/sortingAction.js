import { SET_SORT_TYPE } from "./types";

export const sortPrices = sortType => {
  const {param, sortby,select} = sortType;
  const sortFilter = [];
  sortFilter[0] = sortby;
  sortFilter[1] = param;
  sortFilter[2] = select;
  return {
    type: SET_SORT_TYPE,
    payload: sortFilter
  };
};
