import React from "react";

function SelectInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <span className="error">{props.error}</span>
      <div>
        <select
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        >
          <option hidden>-- select an option --</option>
          {props.inquiryOptions.map((inquiry) => (
            <option key={inquiry.inquiryId} value={inquiry.inquiryId}>
              {inquiry.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
