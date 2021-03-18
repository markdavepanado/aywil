import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
      createdAt: "03/19/21",
      dateAccomplished: "",
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
      createdAt: "09/14/21",
      dateAccomplished: "",
      isDone: true,
    },
  ],
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider value={{ todos: state.todos }}>
      {children}
    </Context.Provider>
  );
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
