import React, { useState, useContext } from "react";

import { Context } from "../context/TodoState";

import "../styles/Aywil.css";

const Aywil = () => {
  const [validations, setValidations] = useState({ textarea: "" });
  const [textAreaCharLength, setTextAreaCharLength] = useState(0);
  const [textArea, setTextArea] = useState("");
  const textAreaMaxLength = 200;

  const { addTodo } = useContext(Context);

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
  return (
    <div className='aywil'>
      <small className='aywil__small'>What will you do today?</small>
      <form className='aywil__tb-container' onSubmit={submitTodo}>
        <div className='aywil__st-container'>
          <small
            className={`aywil__small atwil__small--counter ${
              validations.textarea.length > 0 ? "aywil__small--error" : ""
            }`}
          >
            <span>{textAreaCharLength}</span>/{textAreaMaxLength}
          </small>
          <textarea
            maxLength={textAreaMaxLength}
            className={`aywil__textarea ${
              validations.textarea.length > 0 ? "aywil__textarea--error" : ""
            }`}
            onChange={textareaValidation}
            value={textArea}
            placeholder='I will..'
          />
        </div>
        <button className='aywil__button' type='submit'>
          +
        </button>
      </form>
    </div>
  );
};

export default Aywil;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
