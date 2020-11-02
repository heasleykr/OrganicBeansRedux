// We call it index.js NOT root to make imports simpler.
// Import and declare all your sub reducers in this Root Reducer

import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductsReducer from "./cartProducts";

const rootReducer = combineReducers({
  count: cartCounterReducer,
  cart: cartProductsReducer,
});

export default rootReducer;
