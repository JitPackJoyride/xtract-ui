import React from "react";
import useFileHandler from "../../utils/useFileHandler";
import "./SelectScene.css";
import FileInput from "./components/FileInput";


const SelectScene = () => {
  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange
  } = useFileHandler();

  return (
      <div className="container">
        <form className="form" onSubmit={onSubmit}>
          {status === "FILES_UPLOADED" && (
            <div className="success-container">
              <div>
                <h2>Congratulations!</h2>
                <small>You uploaded your files. Get some rest.</small>
              </div>
            </div>
          )}
          <div>
            <FileInput onChange={onChange} />
            <button type="submit" className="Submit-Button">Submit</button>
          </div>
          <div>
            {files.map(({ file, src, id }, index) => (
              <div
                style={{
                  opacity: uploaded[id] ? 0.2 : 1
                }}
                key={`thumb${index}`}
                className="thumbnail-wrapper"
              >
                <img className="thumbnail" src={src} alt="" />
                <div className="thumbnail-caption">{file.name}</div>
              </div>
            ))}
          </div>
        </form>
      </div>
      
  );
};

export default SelectScene;
