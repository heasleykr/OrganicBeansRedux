// Reducer: a simple fn that receies state and action, and returns a new state.
// Give initial value to state, ours holds an empty array
const cartProductsReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCT") {
    var copy = [...state]; //clone state
    copy.push(action.payload); //modify copy
    console.log(action.payload);
    return copy; // return copy
  } else if (action.type === "REMOVE_PRODUCT") {
    return state.filter((pc) => pc.product.id !== action.payload.product.id);
  }
  return state;
};

export default cartProductsReducer;
