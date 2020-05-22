
import React, { Component } from 'react'
import './App.css';
import AboutProps from "./components/about_props";
import AboutState from "./components/AboutState";
import AboutComponent from "./components/AboutComponent"
import AboutLifeCycle from './components/AboutLifeCycle';
import IntroFunction from './components/IntroFunction';
import NestedFunction from './components/NestedFunction';
import FunctionWithProps from './components/FunctionWithprops';

export class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <h1>Class Component</h1>
      <ul>
        <li>This Key word</li>
        <li>state</li>
        <li>Props(properties)</li>
        <li>Lifecycle of class component</li>
      </ul>
      <AboutProps name="my App" myappName=" my react app">

      </AboutProps>
      <h1>This is about state</h1>
      <AboutState> </AboutState>
      <br>
</br>
<br>
</br>
          <li>Functional Component</li>
          <AboutComponent></AboutComponent>
          <AboutLifeCycle></AboutLifeCycle>
          <IntroFunction></IntroFunction>
          <NestedFunction></NestedFunction>
          <FunctionWithProps></FunctionWithProps>
        </ul>
      </div>
    )
  }
}

export default App;
