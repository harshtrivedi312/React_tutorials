import React, { Component } from "react";

export class AboutLifeCycle extends Component {
  render() {
    return (
      <div>
        <h1>About Component LifeCycle (Class and function)</h1>

        <ol>
          <li>Initial Phase(Load to HTML)</li>
          <li>
            Mounting Phase
            <ol>
              <li>Constructor and Props and State</li>
              <li>static getDerivedStateFromProps()</li>
              <li>render()</li>
              <li>componentDidMount()</li>
            </ol>
          </li>
          <li>
            Update Phase
            <ol>
              <li>static getDerivedStateFromProps()</li>
              <li>shouldComponentUpdate()</li>
              <li>render()</li>
              <li>getSnapshotBeforeUpdate()</li>
              <li>componentDidUpdate()</li>
            </ol>
          </li>
          <li>
            Unmounting Phase
            <ol>
              <li>componentWillUnmount()</li>
            </ol>
          </li>
        </ol>
      </div>
    );
  }
}

export default AboutLifeCycle;
