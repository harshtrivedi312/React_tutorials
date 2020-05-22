import React from "react";

export default class Header extends React.Component {


    render() {

        return (
            <header className='header'>
                <h1 id='title'>The Dice Game</h1>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Restart</a></li>
                    <li><a>Quit</a></li>
                    <li><a>About</a></li>
                </ul>
            
            </header >
        );


    }

}