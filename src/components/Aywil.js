import React, { useState } from "react";

import "../styles/Aywil.css";

const Aywil = () => {
  const [validations, setValidations] = useState({ textarea: "" });
  const [textAreaCharLength, setTextAreaCharLength] = useState(0);
  // const textAreaMaxLength = 200;
  const textAreaMaxLength = 20;

  const textareaValidation = (e) => {
    const { value } = e.target;
    setTextAreaCharLength(value.length);
    if (value.length >= textAreaMaxLength) {
      setValidations({
        ...validations,
        textarea: `You cannot type more than ${textAreaMaxLength}`,
      });
    } else {
      setValidations({
        ...validations,
        textarea: "",
      });
    }
  };
  return (
    <div className='aywil'>
      <small className='aywil__small'>What will you do today?</small>
      <div className='aywil__tb-container'>
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
            placeholder='I will..'
          />
        </div>
        <button className='aywil__button'>+</button>
      </div>
    </div>
  );
};

export default Aywil;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
