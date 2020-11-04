// We call it index.js NOT root to make imports simpler.
// Import and declare all your sub reducers in this Root Reducer

import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductsReducer from "./cartProducts";
import todoTaskReducer from "./todoTask";

const rootReducer = combineReducers({
  count: cartCounterReducer,
  cart: cartProductsReducer,
  todo: todoTaskReducer,
});

export default rootReducer;

/**
 * create action
 * create reduce
 * register reducer w/ root reducer
 * dispath actino to addTodo
 * read the todos from the store
 *
 *
 *  */
