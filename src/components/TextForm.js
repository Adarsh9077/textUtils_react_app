import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    console.log("object");
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to Uppercase!", "success");
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.alert("Text Cleared", "success");
  };
  const handleCopyTxt = () => {
    let text = document.getElementById("my-txt-box");
    // console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Extra spaces removed", "success");
  };
  const onChange = (event) => {
    console.log("object");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="my-txt-box"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
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
        <button
          className="btn btn-clear-txt btn-primary my-md-0 mt-3 me-3"
          type="button"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          id="btn-copy-text-id"
          className="btn btn-copy-text btn-primary my-md-0 mt-3 me-3"
          type="button"
          onClick={handleCopyTxt}
        >
          Copy Text
        </button>
        <button
          id="btn-copy-text-id"
          className="btn btn-copy-text btn-primary my-md-0 mt-3 me-3"
          type="button"
          onClick={handleExtraSpaces}
        >
          Remove extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: propTypes.string };
// 00:00 part 9
