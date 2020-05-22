import React, { Component } from "react";
import DemoClass from "./DemoClass"

export default class MainSection extends Component {
  //Create CSS as Variable ...
  // inside the functions

  render() {
    let cssVariable = {
      fontSize: "35px",
      fontFamily: "Courier",
      color: "red",
    };

    return <div>
      <h1 style={cssVariable}>This is Main Section</h1>
      <DemoClass></DemoClass>
    </div>;
  }
}
