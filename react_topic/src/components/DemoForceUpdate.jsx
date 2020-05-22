import React, { Component } from 'react'

export class DemoForceUpdate extends Component {
    forceUpdateState =()=>{
        this.forceUpdate();
    }
    
    
    
    render() {
        return (
            <div>
                <h4>Example of forceupdate using math function</h4>
                <h5>random Number:{Math.random()}</h5>
                <button onClick={this.forceUpdateState}>Random Number</button>
            </div>
        )
    }
}

export default DemoForceUpdate;
