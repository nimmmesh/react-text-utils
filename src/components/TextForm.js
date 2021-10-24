import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here...");

  const onButtonClick = (action) => {
    switch (action) {
      case "uppercase":
        setText(text.toUpperCase());
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="box" className="form-label">
            Enter your text:
          </label>
          <textarea
            className="form-control"
            id="box"
            rows="3"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            onButtonClick("uppercase");
          }}
        >
          Convert to Upper Case
        </button>
      </div>
    </>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter the text to analzye:",
};

export default TextForm;
