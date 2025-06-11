import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    console.log("object");
    let newText = text.toUpperCase();
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
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: propTypes.string };
// 04:00 part 8