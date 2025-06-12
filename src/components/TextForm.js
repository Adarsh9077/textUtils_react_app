import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    console.log("object");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onChange = (event) => {
    console.log("object");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={onChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleUpperCaseClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-3"
          type="button"
          onClick={handleLowerCase}
        >
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: propTypes.string };
// 00:00 part 9
