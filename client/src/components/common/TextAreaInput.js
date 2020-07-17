import React from "react";
import TextareaAutosize from "react-textarea-autosize";

function TextAreaInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <div>
        <TextareaAutosize
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          id={props.id}
        ></TextareaAutosize>
      </div>
    </div>
  );
}

export default TextAreaInput;
