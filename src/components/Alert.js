import React from "react";

const Alert = (props) => {
  const capitalizeFirstLetter = (word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalizeFirstLetter(props.alert.type)}: </strong>
        {props.alert.message}
      </div>
    )
  );
};

export default Alert;
