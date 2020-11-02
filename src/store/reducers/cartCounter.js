// Introduction to Redux Store!!
//Reducer: a simple fn that recevie state and actions and returns a new state
const cartCounterReducer = (state = 0, action) => {
  //1) copy. Our state was intitialized to 0 b/c it's a counter. Can be anything based on your application
  //2) modify copy
  //3) return a new state
  if (action.type === "INCREMENT_COUNTER") {
    return state + 1;
  }
  return state;
};

export default cartCounterReducer;
