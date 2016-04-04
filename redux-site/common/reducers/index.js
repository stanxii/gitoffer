import { combineReducers } from 'redux';

import products from "./ProductReducer";
import carts from "./CartReducer";
import jobs from "./JobReducer";

export default combineReducers({
  products,
  jobs,
  carts,
});
