import React, { Component } from 'react'

export default class SimpleClass extends Component {
    render() {
        return (
            <div>
                <h4>
                This is example of stateless class component
            </h4>
            <button 
            onClick= {() => {
            return alert("this is simple class component");
        }}
            >
                Click ME
                </button>
            </div>
        )
    }
}
