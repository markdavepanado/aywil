export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
