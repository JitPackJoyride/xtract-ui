import React from "react";
import useFileHandler from "../../../utils/useFileHandler";
import FileInput from "./FileInput";
import { useFileContextState } from "../../../utils/FileContextProvider";
import {
  LOADED,
  INIT,
  PENDING,
  FILES_UPLOADED,
  UPLOAD_ERROR
} from "../../../constants/FileConstants";

const FileUpload = () => {
  const { onSubmit, onChange } = useFileHandler();

  const [
    { files, pending, next, uploading, uploaded, status }
  ] = useFileContextState();

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        {status === FILES_UPLOADED && (
          <div className="success-container">
            <div>
              <h2>Congratulations!</h2>
              <small>You uploaded your files. Get some rest.</small>
            </div>
          </div>
        )}
        <div className="Button-Group">
          <FileInput onChange={onChange} />
          <button type="submit" className="Submit-Button">
            Submit
          </button>
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

export default FileUpload;
