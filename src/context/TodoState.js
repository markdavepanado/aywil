import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  todos: [],
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTodo = (todos) => {
    dispatch({ type: "ADD_TODO", payload: todos });
  };

  return (
    <Context.Provider value={{ todos: state.todos, addTodo }}>
      {children}
    </Context.Provider>
  );
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
