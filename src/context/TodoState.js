import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
      createdAt: "03/19/21",
      dateAccomplished: "03/20/21",
      isDone: true,
    },
    {
      id: 2,
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
      createdAt: "06/21/21",
      dateAccomplished: "",
      isDone: false,
    },
    {
      id: 3,
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
      createdAt: "06/29/21",
      dateAccomplished: "",
      isDone: false,
    },
    {
      id: 4,
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
      createdAt: "07/01/21",
      dateAccomplished: "",
      isDone: false,
    },
    {
      id: 5,
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
      createdAt: "09/14/21",
      dateAccomplished: "09/15/21",
      isDone: true,
    },
  ],
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
