import React from "react";
import { Route, Switch } from "react-router-dom";
import SelectScene from "../SelectScene";

export default function Main() {
  return (
    <div>
      <Route>
        <Switch>
          <Route path="/">
            <SelectScene />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}
