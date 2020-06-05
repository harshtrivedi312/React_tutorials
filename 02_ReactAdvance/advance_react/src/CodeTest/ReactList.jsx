import React, { Component } from 'react';


export default class ReactList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [
                { id: 1001, name: "js" },
                { id: 1002, name: "jsx" },
                { id: 1003, name: "CSS" },
                { id: 1004, name: "HTML" },
            ],
        };
    }
    const [toggle,SetToggle] 

     FlipTheToggle = () => {
        return SetToggle(!toggle);
    };
    

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.id} : {item.name}
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {this.state.list
                        .filter((item) => item.name.indexOf("j"))
                        .map((filterItem) => (
                            <li key={filterItem.id}>
                                {filterItem.id} : {filterItem.name}
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}
