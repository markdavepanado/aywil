import React, { useState } from "react";

import "../styles/Aywil.css";

const Aywil = () => {
  const [validations, setValidations] = useState({ textarea: "" });
  // const txtAreaMaxLength = 200;
  const txtAreaMaxLength = 20;

  const textareaValidation = (e) => {
    const { value, maxLength } = e.target;
    if (value.length >= txtAreaMaxLength) {
      setValidations({
        ...validations,
        textarea: `You cannot type more than ${txtAreaMaxLength}`,
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
      {console.log(validations)}
      <small className='aywil__small'>What will you do today?</small>
      <div className='aywil__ib-container'>
        <textarea
          maxLength={txtAreaMaxLength}
          className={`aywil__textarea ${
            validations.textarea.length > 0 ? "aywil__textarea--error" : ""
          }`}
          onChange={textareaValidation}
        />
        <button className='aywil__button'>+</button>
      </div>
    </div>
  );
};

export default Aywil;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
