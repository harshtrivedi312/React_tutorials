import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Posts from "./Components/Posts"

const App =() => {
    return(
        <div>
<Posts></Posts>
        </div>
    )
}
export default App;

ReactDOM.render(
    <BrowserRouter>
    <App></App>
    </BrowserRouter>,
    document.getElementById("root")
)