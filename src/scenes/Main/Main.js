import React from "react";
import { Route, Switch } from "react-router-dom";
import SelectScene from "../SelectScene/SelectScene";
import HeaderComponent from "../SelectScene/components/HeaderComponent";
import FooterComponent from "../SelectScene/components/FooterComponent";
import TutorialComponent from "../SelectScene/components/TutorialComponent";
import TreeComponent from "../SelectScene/components/TreeComponent";

export default function Main() {
  return (
    <div>
      <div className="background">
        </div>
      <Route>
        <Switch>
          <Route path="/">
            <HeaderComponent />
            <TutorialComponent />
            <SelectScene />
            {/* <TreeComponent /> */}
            <FooterComponent />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}
