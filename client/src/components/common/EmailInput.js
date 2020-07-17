import React from "react";

function EmailInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <span className="error">{props.error}</span>
      <div>
        <input
          name={props.name}
          id={props.id}
          type="email"
          value={props.value}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
}

export default EmailInput;
