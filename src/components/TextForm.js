import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const [text, setText] = useState();
  const { showAlert } = props;

  const onButtonClick = (action) => {
    switch (action) {
      case "uppercase":
        if (text) {
          setText(text.toUpperCase());
          showAlert("Coverted to uppercase!", "success");
        } else {
          showAlert("Please enter some text.", "warning");
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div
        className={`container my-3 text-${props.darkMode ? "light" : "dark"}`}
      >
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
            style={{
              backgroundColor: `${props.darkMode ? "#3d424a" : "white"}`,
              color: `${props.darkMode ? "white" : ""}`,
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
      <div
        className={`container my-3 text-${props.darkMode ? "light" : "dark"}`}
      >
        <h1>Your text summary:</h1>
        <p>
          {text ? text.split(" ").length : 0} words and {text ? text.length : 0}{" "}
          characters
        </p>
        <p>
          Your approximated read time is{" "}
          {text ? 0.008 * text.split(" ").length : 0}
        </p>
        <h3>Text preview:</h3>
        <p>
          {text && text.length > 0
            ? text
            : "Enter something in the textbox to preview it here."}
        </p>
      </div>
    </>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setisDarkModeEnabled: PropTypes.func.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter the text to analzye:",
  darkMode: false,
};

export default TextForm;
