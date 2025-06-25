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
    // document.getSelection().removeAllRanges();
    props.alert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Extra spaces removed", "success");
  };
  const onChange = (event) => {
    // console.log("object");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="my-txt-box"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#999",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={onChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          type="button"
          onClick={handleUpperCaseClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-md-3 mx-1"
          type="button"
          onClick={handleLowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-clear-txt btn-primary my-md-0 mt-1 me-md-3 me-1"
          type="button"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          id="btn-copy-text-id"
          className="btn btn-copy-text btn-primary my-md-0 mt-1 me-md-3 me-1"
          type="button"
          onClick={handleCopyTxt}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          id="btn-copy-text-id"
          className="btn btn-copy-text btn-primary my-md-0 mt-1 me-3"
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
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: propTypes.string };
