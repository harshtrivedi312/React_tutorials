import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import SimpleClass from "./Components/SimpleClass"
import SimpleFunction from "./Components/SimpleFunction";
import ClassWithState from "./Components/ClasswithState";
import FunctionWithState from "./Components/FunctionWithState";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <h1>React Component Lifecycle</h1>
      <h3>React Class Component (LifeCycle)</h3>
      <SimpleClass />
      <ClassWithState />
      <h3>React Functional Component (Hooks)</h3>
      <SimpleFunction />
      <FunctionWithState />
    </Fragment>
  );
};


ReactDOM.render(<App />, document.querySelector("#root"));