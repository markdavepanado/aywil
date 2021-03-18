import React, { useContext } from "react";

import Todo from "./Todo";
import { Context } from "../context/TodoState";

import "../styles/TodoList.css";

const TodoList = () => {
  const { todos } = useContext(Context);
  return (
    <div className='todo-list'>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((mappedTodo) => (
          <Todo
            key={mappedTodo.id}
            text={mappedTodo.text}
            dateCreated={mappedTodo.createdAt}
            dateAccomplished={mappedTodo.dateAccomplished}
            isDone={mappedTodo.isDone}
          />
        ))}
    </div>
  );
};

export default TodoList;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
