import React from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: propTypes.string };
