import React, { Component } from "react";
import XtractIcon from "../../../assets/XtractIcon.png";

class HeaderComponent extends Component {
  render() {
    return (
        <div className="Header-component">
          <img className="App-icon" src={XtractIcon} />
          <div className="App-title">Xtract</div>
          <div className=""></div>
        </div>
    );
  }
}

export default HeaderComponent;
