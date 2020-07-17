import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function FileSubmission() {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const [fileUploaded, setFileUploaded] = useState({});

  const handleChange = (event) => {
    setFileUploaded(event.target.files[0]);
    debugger;
  };

  return (
    <div className="upload-file">
      <label onClick={handleClick}>Upload Resume:</label>
      <input
        ref={hiddenFileInput}
        onChange={handleChange}
        type="file"
        className="resume"
        accept=".pdf"
      ></input>
      <span>
        <FontAwesomeIcon
          icon={faUpload}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </span>
      <span>{fileUploaded ? fileUploaded.name : ""}</span>
    </div>
  );
}

export default FileSubmission;
