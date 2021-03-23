import React, { useState, useContext, useEffect } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { ThemeProvider } from "@material-ui/core/styles";
import UpdateIcon from "@material-ui/icons/Update";

import { Context } from "../context/TodoState";
import { fabTheme } from "../utils/theme";
import useWindowDimensions from "../utils/useWindowsDimension";
import "../styles/Aywil.css";

const Aywil = () => {
  const [validations, setValidations] = useState({ textarea: "" });
  const [textAreaCharLength, setTextAreaCharLength] = useState(0);
  const [textArea, setTextArea] = useState("");
  const [hideAywil, setHideAywil] = useState(true);
  const [hideAywil__small, setHideAywil__small] = useState(false);
  const textAreaMaxLength = 200;
  const { height, width } = useWindowDimensions();

  const { addTodo, isEditing, todo, setIsEditing, updateTodo } = useContext(
    Context
  );

  useEffect(() => {
    if (width < 720) {
      setHideAywil(true);
    } else {
      setHideAywil(false);
    }

    if (width <= 440) {
      setHideAywil__small(true);
    } else {
      setHideAywil__small(false);
    }
  }, [width]);

  useEffect(() => {
    checkEditMode();
  }, [isEditing]);

  const submitTodo = (e) => {
    e.preventDefault();
    if (textAreaCharLength === 0) {
      setValidations({
        ...validations,
        textarea: `Type something to proceed.`,
      });

      return;
    }

    if (validations.textarea.length > 0) {
      return;
    }

    if (isEditing) {
      return;
    }

    addTodo({
      id: Math.floor(Math.random() * 1000) + 1,
      text: textArea,
      createdAt: new Date().toJSON(),
      dateAccomplished: "",
      isDone: false,
    });

    setTextArea("");
    setTextAreaCharLength(0);
    setValidations({ textarea: "" });
  };

  const checkEditMode = () => {
    if (isEditing) {
      setTextArea(todo.text);
      return;
    }

    setTextArea("");
  };

  const textareaValidation = (e) => {
    const { value } = e.target;
    setTextAreaCharLength(value.length);
    if (value.length >= textAreaMaxLength) {
      setValidations({
        ...validations,
        textarea: `You cannot type more than ${textAreaMaxLength}`,
      });
    } else {
      setTextArea(value);
      setValidations({
        ...validations,
        textarea: "",
      });
    }
  };

  const fabOnClick = () => {
    setHideAywil(!hideAywil);
  };

  const cancelBtnClick = () => {
    setIsEditing("", false);
  };
  const updateBtnClick = () => {
    updateTodo(todo.id, {
      id: todo.id,
      text: textArea,
      createdAt: todo.dateCreated,
      dateAccomplished: todo.dateAccomplished,
      isDone: todo.isDone,
    });

    setTextArea("");
    setTextAreaCharLength(0);
    setValidations({ textarea: "" });
    setIsEditing("", false);
  };

  const pasteTextArea = (e) => {
    e.preventDefault();

    e.clipboardData.items[0].getAsString((text) => {
      setTextAreaCharLength(text.length);
      setTextArea(text);
      if (text.length >= textAreaMaxLength) {
        setValidations({
          ...validations,
          textarea: `You cannot type more than ${textAreaMaxLength}`,
        });
      } else {
        setTextArea(text);
        setValidations({
          ...validations,
          textarea: "",
        });
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={fabTheme}>
        <Fab
          className='aywil__fab'
          color='secondary'
          size='small'
          aria-label='Add'
          onClick={fabOnClick}
        >
          {hideAywil ? (
            <AddIcon style={{ color: fabTheme.palette.textColor.main }} />
          ) : (
            <CloseIcon style={{ color: fabTheme.palette.textColor.main }} />
          )}
        </Fab>
      </ThemeProvider>
      {/* aywil aywil--hide */}
      <div
        className={`aywil ${hideAywil ? "aywil--hide" : ""} ${
          isEditing ? "aywil--editing" : ""
        }`}
      >
        <small className='aywil__small'>What will you do today?</small>
        <form className='aywil__tb-container' onSubmit={submitTodo}>
          <div className='aywil__st-container'>
            <small
              className={`aywil__small atwil__small--counter ${
                validations.textarea.length > 0 ? "aywil__small--error" : ""
              } ${hideAywil__small ? "aywil__small--hide" : ""}`}
            >
              <span>{textAreaCharLength}</span>/{textAreaMaxLength}
            </small>
            <textarea
              maxLength={textAreaMaxLength}
              className={`aywil__textarea ${
                validations.textarea.length > 0 ? "aywil__textarea--error" : ""
              }`}
              onChange={textareaValidation}
              onPaste={pasteTextArea}
              value={textArea}
              placeholder='I will..'
            />
          </div>
          {isEditing ? (
            <div className='aywil__button-container'>
              <button
                className='aywil__button aywil__button--cancel'
                onClick={cancelBtnClick}
              >
                <CloseIcon fontSize='small' />
              </button>
              <button
                className='aywil__button aywil__button--update'
                onClick={updateBtnClick}
              >
                <UpdateIcon />
              </button>
            </div>
          ) : (
            <button className='aywil__button' type='submit'>
              <AddIcon style={{ color: fabTheme.palette.textColor.main }} />
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Aywil;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
