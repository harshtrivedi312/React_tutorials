import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import ReactCalendar from "./Calander";

function ListItems(props) {
    const items = props.items;
    const date = new Date();
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)}} />
                    <p>{date.getFullYear() + "/" + (date.getMonth()+1) + "/" + (date.getDay()) + (date.getHours()) + ":"+ (date.getMinutes())} </p>
                <span>
                
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                  
                </span>
                
            </p>

        </div>
    })
    return <div>
        <FlipMove duration={500} easing="ease-in-out">
           <div>
           {listItems} 
           </div>
        </FlipMove>

    </div>;
}

export default ListItems;