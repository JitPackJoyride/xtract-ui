import { useCallback, useEffect, useReducer, useRef } from "react";
import { useFileContextState } from "./FileContextProvider";

const api = {
  uploadFile({ timeout = 550 }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }
};

const logUploadedFile = (num, color = "green") => {
  const msg = `%cUploaded ${num} files.`;
  const style = `color:${color};font-weight:bold;`;
  console.log(msg, style);
};

const useFileHandler = () => {
  const [
    { files, pending, next, uploading, uploaded, status },
    dispatch
  ] = useFileContextState();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (files.length) {
        dispatch({ type: "submit" });
      } else {
        window.alert("You don't have any files loaded.");
      }
    },
    [files.length]
  );

  const onChange = e => {
    if (e.target.files.length) {
      const arrNewFiles = Array.from(e.target.files);
      const newFiles = arrNewFiles.map((file, index) => {
        const src = window.URL.createObjectURL(file);
        return { file, id: index, src };
      });
      const allFiles = files.concat(newFiles);
      dispatch({ type: "load", files: allFiles });
    }
  };

  // Sets the next file when it detects that its ready to go
  useEffect(() => {
    if (pending.length && next == null) {
      const next = pending[0];
      dispatch({ type: "next", next });
    }
  }, [next, pending]);

  const countRef = useRef(0);

  // Processes the next pending thumbnail when ready
  useEffect(() => {
    if (pending.length && next) {
      api
        .uploadFile(next)
        .then(() => {
          const prev = next;
          logUploadedFile(++countRef.current);
          dispatch({ type: "file-uploaded", prev, pending });
        })
        .catch(error => {
          console.error(error);
          dispatch({ type: "set-upload-error", error });
        });
    }
  }, [files, pending, next, uploading, uploaded, status]);

  // Ends the upload process
  useEffect(() => {
    if (!pending.length && uploading) {
      dispatch({ type: "files-uploaded" });
    }
  }, [pending.length, uploading]);

  const oldState = { files, pending, next, uploading, uploaded, status };

  return {
    onSubmit,
    onChange
  };
};

export default useFileHandler;
