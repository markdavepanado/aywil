import React, { useContext, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { Context } from "../context/TodoState";

import "../styles/Todo.css";

const Todo = ({ id, text, dateCreated, dateAccomplished, isDone }) => {
  const styles = {
    todoButtonIcon: {
      fontSize: "1em",
    },
  };

  const { deleteTodo, doneTodo, isEditing, setIsEditing } = useContext(Context);

  const deleteBtnClick = (e) => {
    deleteTodo(id);
  };

  const doneBtnClick = (e) => {
    const now = new Date().toJSON();
    doneTodo(id, !isDone, now);
  };

  const editBtnClick = (e) => {
    const todo = {
      id: id,
      text: text,
      dateCreated: dateCreated,
      dateAccomplished: dateAccomplished,
      isDone: isDone,
    };
    setIsEditing(todo, true);
  };

  return (
    <div className={`todo ${isDone ? "todo--done" : ""}`}>
      <div className='todo__todo-date-container'>
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
        <div className='todo__action'>
          <button
            className='todo__button todo__button--delete'
            onClick={deleteBtnClick}
          >
            <DeleteIcon style={styles.todoButtonIcon} />
          </button>
          {isDone ? (
            ""
          ) : (
            <>
              <button
                className='todo__button todo__button--edit'
                onClick={editBtnClick}
              >
                <EditIcon style={styles.todoButtonIcon} />
              </button>
              <button
                className='todo__button todo__button--done'
                onClick={doneBtnClick}
              >
                <DoneIcon style={styles.todoButtonIcon} />
              </button>
            </>
          )}
        </div>
      </div>
      <h5 className='todo__h5'>{text}</h5>
    </div>
  );
};

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9

export default Todo;
