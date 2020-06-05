import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from "react-router-dom";

const App = ( ) => {
  return <div>
    <h1>This is NEW React APP</h1>
    <p>This is main Page</p>
    <div>
      <ul>
        <li><Link to="/">Main Page</Link></li>
        <li>
        <Link to="/home">Home</Link> </li>
        <li><Link to="/Products">Services</Link></li>
      </ul>
      <Route path="/"></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/products" component={ProductList}></Route>
    </div>
  </div>
}

export default App;

const Home = ( ) =>{
  return (
    <div>
      <h1>Home</h1>
      <p>This is about Home Page</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        <li>
          IT Services
        </li>
        <li>Professional Services</li>
      </ul>
    </div>
  );
};


ReactDOM.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);


