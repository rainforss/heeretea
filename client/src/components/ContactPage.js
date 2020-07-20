import React, { useState } from "react";
import axios from "axios";
import GeneralForm from "./common/GeneralForm";
import "./ContactPage.css";
import SectionSlicerLeft from "./common/SectionSlicerLeft";
import SectionSlicerRight from "./common/SectionSlicerRight";
import Fade from "react-reveal/Fade";

function ContactPage() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "",
    optionalInfo: {
      comments: "",
      companyName: "",
      phoneNumber: "",
      employeeNameTag: "",
      dispute: "",
    },
  });

  const [errors, setErrors] = useState({});

  const inquiryOptions = [
    { inquiryId: 1, name: "General Inquiry" },
    { inquiryId: 2, name: "Product Review" },
    { inquiryId: 3, name: "Career Inquiry" },
    { inquiryId: 4, name: "Complaint Submission" },
  ];

  function handleChange(event) {
    if (
      event.target.name === "firstName" ||
      event.target.name === "lastName" ||
      event.target.name === "email" ||
      event.target.name === "inquiryType"
    ) {
      setContactInfo({
        ...contactInfo,
        [event.target.name]: event.target.value,
      });
    } else {
      setContactInfo({
        ...contactInfo,
        optionalInfo: { [event.target.name]: event.target.value },
      });
    }
  }

  function isFormValid() {
    const { firstName, lastName, email, inquiryType } = contactInfo;
    const errors = {};
    if (firstName === "") errors.firstName = "Please enter your first name";
    if (lastName === "") errors.lastName = "Please enter your last name";
    if (email === "") errors.email = "Please enter your email";
    if (!inquiryType) errors.inquiryType = "Please select an inquiry type";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    alert("Still under construction");
    resetForm();
    /*axios({
      method: "POST",
      url: "/send",
      data: contactInfo,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("message sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("message failed to send");
      }
    });*/
  }

  function resetForm() {
    setContactInfo({ ...contactInfo, firstName: "", lastName: "", email: "" });
  }

  return (
    <>
      <SectionSlicerLeft />
      <Fade duration={2000} left>
        <div id="contact" className="contact-wrapper">
          <h2>We want to hear from you !</h2>
          <GeneralForm
            contactInfo={contactInfo}
            inquiryOptions={inquiryOptions}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
          />
        </div>
      </Fade>
      <SectionSlicerRight />
    </>
  );
}

export default ContactPage;
