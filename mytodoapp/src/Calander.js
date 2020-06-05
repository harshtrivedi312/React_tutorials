import React,{useState} from "react";
import {render} from "react-dom";
import Calendar from "react-calendar";

const ReactCalendar = () => {

const [date,setDate] = useState(new Date());

const onChange = date => {
    setDate(date);
};

    return(
    <div>
    <Calendar onChange={onChange} value={date}/>
    {date.toString()}
    </div>)

};


export default ReactCalendar;

//render(<ReactCalendar/>,document.querySelector("#root"))