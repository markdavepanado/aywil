import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  todos: [],
  isEditing: false,
  todo: {},
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTodo = (todos) => {
    dispatch({ type: "ADD_TODO", payload: todos });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const doneTodo = (id, isDone, dateAccomplished) => {
    dispatch({
      type: "DONE_TODO",
      payload: { id: id, isDone: isDone, dateAccomplished: dateAccomplished },
    });
  };

  const setIsEditing = (todo, isEditing) => {
    dispatch({
      type: "SET_EDITING",
      payload: { todo: todo, isEditing: isEditing },
    });
  };

  return (
    <Context.Provider
      value={{
        todos: state.todos,
        isEditing: state.isEditing,
        todo: state.todo,
        addTodo,
        deleteTodo,
        doneTodo,
        setIsEditing,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
