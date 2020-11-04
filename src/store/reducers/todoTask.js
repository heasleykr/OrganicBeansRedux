// Reducer: a simple fn that receives state and action, and returns a new state.
// Give initial value to state, ours holds an empty array
const todoTaskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      var copy = [...state]; //clone state
      copy.push(action.payload); //add task
      return copy; //return copy
    case "REMOVE_TODO":
      //Filter out tasks and remove requested by id
      return state.filter((t) => t.todo.id !== action.payload.todo.id);
    default:
      return state;
  }
};

export default todoTaskReducer;
