import React from "react";

const FileInput = props => (
  <input
    type="file"
    accept="image/*"
    name="img-loader-input"
    multiple
    {...props}
  />
);

export default FileInput;
