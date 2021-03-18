import React from "react";

import "../styles/Todo.css";

const Todo = ({ text, dateCreated, dateAccomplished, isDone }) => {
  return (
    <div className={`todo ${isDone ? "todo--done" : ""}`}>
      <div className='todo__date-container'>
        <small className='todo__date'>Date Created: {dateCreated}</small>
        {isDone ? (
          <small className='todo__date'>
            Date Accomplished: {dateAccomplished}
          </small>
        ) : (
          ""
        )}
      </div>
      <h5 className='todo__h5'>{text}</h5>
    </div>
  );
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9

export default Todo;
