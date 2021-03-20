import React, { useContext } from "react";

import Todo from "./Todo";

import { Context } from "../context/TodoState";

import "../styles/DoneList.css";

const DoneList = () => {
  const { todos } = useContext(Context);
  return (
    <div className='done-list'>
      {todos.length > 0 ? (
        todos
          .filter((todo) => todo.isDone === true)
          .map((mappedTodo) => (
            <Todo
              key={mappedTodo.id}
              text={mappedTodo.text}
              dateCreated={mappedTodo.createdAt}
              dateAccomplished={mappedTodo.dateAccomplished}
              isDone={mappedTodo.isDone}
            />
          ))
      ) : (
        <h5>You have done nothing so far. 🥱</h5>
      )}
    </div>
  );
};

export default DoneList;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
