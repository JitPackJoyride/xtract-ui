import React from "react";
import { Route, Switch } from "react-router-dom";
import SelectScene from "../SelectScene/SelectScene";
import HeaderComponent from "../SelectScene/components/HeaderComponent";
import FooterComponent from "../SelectScene/components/FooterComponent";
import TutorialComponent from "../SelectScene/components/TutorialComponent";
import BeneficialOwners from "../BeneficialOwners/BeneficialOwners";

export default function Main() {
  return (
    <div>
      <div className="background"></div>
      <Route>
        <Switch>
          <Route exact path="/">
            <HeaderComponent />
            <TutorialComponent />
            <SelectScene />
            <FooterComponent />
          </Route>
          <Route exact path="/beneficialOwners">
            <HeaderComponent />
            <BeneficialOwners />
            <FooterComponent />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}
