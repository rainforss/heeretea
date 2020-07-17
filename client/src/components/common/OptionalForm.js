import React from "react";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import FileSubmission from "./FileSubmission";

function OptionalForm(props) {
  switch (props.option) {
    case "1":
      return (
        <TextAreaInput
          value={props.value.comments}
          onChange={props.onChange}
          name="comments"
          id="comments"
          label="Comments"
        />
      );
    case "2":
      return (
        <TextInput
          value={props.value.companyName}
          onChange={props.onChange}
          name="companyName"
          id="companyName"
          label="Company or organisation name"
        />
      );
    case "3":
      return (
        <>
          <TextInput
            value={props.value.phoneNumber}
            onChange={props.onChange}
            name="phoneNumber"
            id="phoneNumber"
            label="Phone Number"
          />
          <FileSubmission />
        </>
      );
    case "4":
      return (
        <>
          <TextInput
            value={props.value.employeeNameTag}
            onChange={props.onChange}
            name="employeeNameTag"
            id="employeeNameTag"
            label="Employee Name Tag"
          />
          <TextAreaInput
            value={props.value.dispute}
            onChange={props.onChange}
            name="dispute"
            id="dispute"
            label="Dispute"
          />
        </>
      );
    default:
      return <></>;
  }
}

export default OptionalForm;
