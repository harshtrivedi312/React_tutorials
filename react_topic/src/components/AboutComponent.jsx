import React, { Component } from "react";
import DemoForceUpdate from "./DemoForceUpdate"


export class AboutComponent extends Component {

constructor(){
    super();
}








  render() {
    return (
      <div>
        <h1> This is about React component API functions</h1>
        <ul>
          <li>setState()</li>
          <p>
            -setState() function will allow to modify the state values in
            runtime<br></br>
            -setState does not immideately update the object,it will only update
            upon requested event like onclick onload or any html event.
          </p>
          <li>
            forceUpdate()
            <p>
              -forceUpdate will allow us to update the component manully it is
              not recommended to use unless it's required.
              <br></br>
              -force entire HTML object to reload everytime we call thei s
              function.
            </p>
            <DemoForceUpdate></DemoForceUpdate>
          </li>
          <li>
            FindDOMNode()
            <p>

            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutComponent;
