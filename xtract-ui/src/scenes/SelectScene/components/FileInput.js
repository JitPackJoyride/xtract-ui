import React from "react";

const FileInput = props => (
  <div className="File-Input-Component">
    <input
      // style={{background: 'blue'}}
      className=""
      type="file"
      accept="image/*"
      name="img-loader-input"
      multiple
      {...props}
    />
    <button className="Choose-Files-Button">Choose File</button>
  </div>
);

export default FileInput;
