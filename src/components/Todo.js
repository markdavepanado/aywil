import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "../styles/Todo.css";

const Todo = ({ text, dateCreated, dateAccomplished, isDone }) => {
  const styles = {
    todoButtonIcon: {
      fontSize: "1em",
    },
  };

  return (
    <div className={`todo ${isDone ? "todo--done" : ""}`}>
      <div className='todo__todo-date-container'>
        <div className='todo__action'>
          <button className='todo__button todo__button--delete'>
            <DeleteIcon style={styles.todoButtonIcon} />
          </button>
          {isDone ? (
            ""
          ) : (
            <>
              <button className='todo__button todo__button--edit'>
                <EditIcon style={styles.todoButtonIcon} />
              </button>
              <button className='todo__button todo__button--done'>
                <DoneIcon style={styles.todoButtonIcon} />
              </button>
            </>
          )}
        </div>
        <div className='todo__date-container'>
          <small className='todo__date'>
            Date Created: {new Date(dateCreated).toLocaleString()}
          </small>
          {isDone ? (
            <small className='todo__date'>
              Date Accomplished: {new Date(dateAccomplished).toLocaleString()}
            </small>
          ) : (
            ""
          )}
        </div>
      </div>
      <h5 className='todo__h5'>{text}</h5>
    </div>
  );
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9

export default Todo;
