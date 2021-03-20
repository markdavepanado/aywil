import React, { useContext } from "react";

import Todo from "./Todo";
import { Context } from "../context/TodoState";

import "../styles/TodoList.css";

const TodoList = () => {
  const { todos } = useContext(Context);
  return (
    <div className='todo-list'>
      {todos.length > 0 ? (
        todos.filter((todo) => todo.isDone === false).length > 0 ? (
          todos
            .filter((todo) => todo.isDone === false)
            .sort((a, b) => {
              let aa = a.dateCreated;
              let ab = b.dateCreated;

              return ab - aa;
            })
            .map((mappedTodo) => (
              <Todo
                key={mappedTodo.id}
                id={mappedTodo.id}
                text={mappedTodo.text}
                dateCreated={mappedTodo.createdAt}
                dateAccomplished={mappedTodo.dateAccomplished}
                isDone={mappedTodo.isDone}
              />
            ))
        ) : (
          <h5>No task for today, why not make one? 🤨</h5>
        )
      ) : (
        <h5>No task for today, why not make one? 🤨</h5>
      )}
    </div>
  );
};

export default TodoList;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
