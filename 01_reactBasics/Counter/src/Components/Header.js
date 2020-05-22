import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>This is header</h1>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </header>
    );
  }
}
