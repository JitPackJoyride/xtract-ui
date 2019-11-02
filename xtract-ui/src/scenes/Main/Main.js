import React from "react";
import { Route, Switch } from "react-router-dom";
import SelectScene from "../SelectScene/SelectScene";
import HeaderComponent from "../SelectScene/components/HeaderComponent";
import FooterComponent from "../SelectScene/components/FooterComponent";
export default function Main() {
  return (
    <div>
      <Route>
        <Switch>
          <Route path="/">
          <HeaderComponent />
            <SelectScene />
            <FooterComponent />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}
