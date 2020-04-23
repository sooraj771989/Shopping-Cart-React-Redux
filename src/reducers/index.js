import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import sortingReducer from "./sortingReducer";
import {searchReducer} from "./searchReducer";
import filteringReducer from "./filteringReducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  sort: sortingReducer,
  search: searchReducer,
  filter: filteringReducer,
});

export default rootReducer;
