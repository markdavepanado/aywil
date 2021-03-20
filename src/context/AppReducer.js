export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case "DONE_TODO":
      console.log(action.payload);
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id
              ? {
                  ...todo,
                  isDone: action.payload.isDone,
                  dateAccomplished: action.payload.dateAccomplished,
                }
              : todo
          ),
        ],
      };
    case "SET_EDITING":
      return {
        ...state,
        isEditing: action.payload.isEditing,
        todo: action.payload.todo,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.map((mappedTodo) =>
            mappedTodo.id === action.payload.id
              ? action.payload.todo
              : mappedTodo
          ),
        ],
      };
    default:
      return state;
  }
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
