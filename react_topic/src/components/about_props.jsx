import React, { Component } from 'react'

export class AboutProps extends Component {
    /**
     * IN class component in react you must have render function
     * return type is required in renderfunction
     ************************************************** 
     * in JavaScript Class
     * 1.keyword class
     * 2.constructor
     * 3.functions - static , instance(new)
     * 4.global and local variable
     * 5.static and instance can be public or private
     * 6. inclass do not use keyword function
     
     */
    static defaultProps = {
        name: "Default Name",
        appName: " My Default AppName"
    }
    //before ES6..
    triggerAlert = () => {
        alert("Function with an alert");
    };

    render() {
        return (
            <div id="propDiv">
                <h1>This is about props</h1>
                <p>props are an args of class or function cmoponent</p>
                <h4 >this is h4 tag {this.props.name}</h4>
                <h4>My application name:{this.props.appName}</h4>
                {/* Using and Arrow Function */}
                <button onClick={this.triggerAlert}>Click for an alert</button>

                {/* Using bind function to call the local functions */}
                <button onClick={this.triggerAlert.bind(this)}>
                    Alert With Binding
</button>
            </div>
        )
    }
}


export default AboutProps;




