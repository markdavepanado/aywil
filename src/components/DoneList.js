import React, { useContext } from "react";

import Todo from "./Todo";

import { Context } from "../context/TodoState";

import "../styles/DoneList.css";

const DoneList = () => {
  const { todos } = useContext(Context);

  // const doneTodos =
  //   todos.length > 0 && todos.filterfilter((todo) => todo.isDone === true);
  return (
    <div className='done-list'>
      {todos.length > 0 ? (
        todos.filter((todo) => todo.isDone === true).length > 0 ? (
          todos
            .filter((todo) => todo.isDone === true)
            .sort((a, b) => {
              let aa = new Date(a.dateAccomplished);
              let ab = new Date(b.dateAccomplished);

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
          <h5>You have done nothing so far. 🥱</h5>
        )
      ) : (
        <h5>You have done nothing so far. 🥱</h5>
      )}
    </div>
  );
};

export default DoneList;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
