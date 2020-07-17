import React from "react";

import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import OptionalForm from "./OptionalForm";

function GeneralForm(props) {
  return (
    <div className="form-wrapper">
      <div className="general-form-wrapper">
        <form className="general-form">
          <TextInput
            name="firstName"
            id="firstName"
            label="First Name"
            value={props.contactInfo.firstName}
            onChange={props.onChange}
            error={props.errors.firstName}
          />
          <TextInput
            name="lastName"
            id="lastName"
            label="Last Name"
            value={props.contactInfo.lastName}
            onChange={props.onChange}
            error={props.errors.lastName}
          />
          <EmailInput
            name="email"
            id="email"
            label="Email Address"
            value={props.contactInfo.email}
            onChange={props.onChange}
            error={props.errors.email}
          />
          <SelectInput
            name="inquiryType"
            id="inquiryType"
            label="Inquiry Type"
            value={props.contactInfo.inquiryType}
            inquiryOptions={props.inquiryOptions}
            onChange={props.onChange}
            error={props.errors.inquiryType}
          />
        </form>
      </div>
      <div className="optional-form-wrapper">
        <OptionalForm
          onChange={props.onChange}
          option={props.contactInfo.inquiryType}
          value={props.contactInfo.optionalInfo}
        />

        <input
          className="form-submit"
          type="submit"
          value="Submit"
          onClick={props.onSubmit}
        ></input>
      </div>
    </div>
  );
}

export default GeneralForm;
