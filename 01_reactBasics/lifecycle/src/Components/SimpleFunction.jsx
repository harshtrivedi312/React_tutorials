import React from 'react'

function SimpleFunction() {
    return (
        <div>
            <h4>
                This is example of stateless  Function 
            </h4>
            <button  
            onClick= {() => {
            return alert("this is simple function component");
        }} >click Me</button>
        </div>
    )
}

export default SimpleFunction;
