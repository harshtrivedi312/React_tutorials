import React, { Component } from "react";

export class Comments extends Component {
  render() {
    return (
      <div className="box">
        <div className="grid-container">
          <img className="item2" src="../Assets/UserIcon.png" alt=""></img>
          <h4 className="item3">Alex</h4>
          <p className="item4">Today at 5:00</p>
          <p className="item5">Great Blog Post!!</p>
        </div>
        <div className="grid-container">
          <img className="item2" src="../Assets/UserIcon.png" alt=""></img>
          <h4 className="item3">Alex</h4>
          <p className="item4">Today at 7:51</p>
          <p className="item5">Informative Thanks. </p>
        </div>
        <div className="grid-container">
          <img className="item2" src="../Assets/UserIcon.png" alt=""></img>
          <h4 className="item3">Jane</h4>
          <p className="item4">Today at 9:01</p>
          <p className="item5">Looks great</p>
        </div>
        
      </div>
    );
  }
}

export default Comments;
