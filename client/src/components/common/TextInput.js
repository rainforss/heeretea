import React from "react";

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <span className="error">{props.error}</span>
      <div>
        <input
          name={props.name}
          id={props.id}
          type="text"
          value={props.value}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
}

export default TextInput;
