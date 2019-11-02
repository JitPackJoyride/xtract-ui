import React from "react";
import "./SelectScene.css";
import { FileContextProvider } from "../../utils/FileContextProvider";
import FileUpload from "./components/FileUpload";
import {
  LOADED,
  INIT,
  PENDING,
  FILES_UPLOADED,
  UPLOAD_ERROR
} from "../../constants/FileConstants";

const SelectScene = () => {
  const initialState = {
    files: [],
    pending: [],
    next: null,
    uploading: false,
    uploaded: {},
    status: "idle"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "load":
        return { ...state, files: action.files, status: LOADED };
      case "submit":
        return {
          ...state,
          uploading: true,
          pending: state.files,
          status: INIT
        };
      case "next":
        return {
          ...state,
          next: action.next,
          status: PENDING
        };
      case "file-uploaded":
        return {
          ...state,
          next: null,
          pending: action.pending,
          uploaded: {
            ...state.uploaded,
            [action.prev.id]: action.prev.file
          }
        };
      case "files-uploaded":
        return { ...state, uploading: false, status: FILES_UPLOADED };
      case "set-upload-error":
        return { ...state, uploadError: action.error, status: UPLOAD_ERROR };
      default:
        return state;
    }
  };

  return (
    <FileContextProvider initialState={initialState} reducer={reducer}>
      <FileUpload />
    </FileContextProvider>
  );
};

export default SelectScene;
