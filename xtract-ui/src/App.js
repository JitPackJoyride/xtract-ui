import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./utils/StateProvider";

import SelectScene from "./scenes/SelectScene/index";

export default function App() {
  const initialState = {};

  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <SelectScene />
      </BrowserRouter>
    </StateProvider>
  );
}
