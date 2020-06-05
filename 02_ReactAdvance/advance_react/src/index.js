import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Employee from './Components/Employee';
import Student from "./Components/Student";
import ConditionalBasics from './Components/Conditional/conditionalBasics';
import ButtonChange from './Components/Conditional/ButtonChange';
import ReactList from './CodeTest/ReactList';



export default class App extends Component {

  render() {
    return <div>
      <h1> This is Advance React Topics </h1>
      <h1>--------------------------------------</h1>
      <Employee name="demoName" age={20} id={209} details={{ dept: "Department = IT development" }} numbers={[75, 78, 88, 99, 90]}>

      </Employee>
      <Student name="My Name" id={101212} schoolName={" Name of The School"} details={{ class: " 1A" }} SomeArray={[1234567]} >
      </Student>
      <ConditionalBasics>

      </ConditionalBasics>
      <ButtonChange>

      </ButtonChange>
      <ReactList></ReactList>
    </div>
  }
}




ReactDOM.render(<App />, document.getElementById('root'));


