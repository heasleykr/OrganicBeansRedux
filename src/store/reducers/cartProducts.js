// Reducer: a simple fn that receies state and action, and returns a new state.
// Give initial value to state, ours holds an empty array
const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state]; //clone state

      //Flag
      var alreadyThere = false;

      // Check cart, add to quantitiy if item already exists in cart
      for (let i = 0; i < copy.length; i++) {
        var p = copy[i];

        if (action.payload.product.id === p.product.id) {
          p.quantity = action.payload.quantity + p.quantity;
          alreadyThere = true;
        }
      }

      // Add product to cart if not already in cart
      if (!alreadyThere) {
        copy.push(action.payload);
      }

      // HERE: send the cart product to server (if you were using server)

      return copy; // return copy
    case "REMOVE_PRODUCT":
      // Filter out requested product by id, return the remaining
      return state.filter((pc) => pc.product.id !== action.payload.product.id);

    default:
      return state;
  }
};

export default cartProductsReducer;
