import React, { Component } from 'react'

/**
 * 1.State keyword in react
 * 2.state is always a part of the <const >
 * 3.state is an object..key and valye
 * 4.state key value acn only be updated via setState function
 * 5.state have local adtathat canbe used while loading class component.
 */

export class AboutState extends Component {


constructor(){
    super();
    this.state={
        brand:"Tesla",
        model:"model x",
        color:"Red"
    };
}

ChangeTheModel =()=>{
    this.setState({model:"Model 3"})
};

ChangeColor=()=>{
    this.setState({color:"Blue"})
}





//render function that will always return single HTML tag


    render() {
        return (
            <div>
                <h4>Car Brand:{this.state.brand} </h4>
                <p>The brand offers model as {this.state.model} and color option {this.state.color}</p>
            <button onClick={this.ChangeTheModel}>change model</button>
            <button onClick={this.ChangeColor}>change Color</button>
            </div>
        )
    }
}

export default AboutState;
