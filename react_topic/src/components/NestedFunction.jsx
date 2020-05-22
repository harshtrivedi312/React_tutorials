import React from 'react'

const NestedFunction = () => {
    return (
        <div>
            <HeadLine></HeadLine>
    <p>{getNames()}</p>
        </div>
    )
};

const HeadLine = () =>{
    const heading = "Hello Nested Functions";
    return <h1>{heading}</h1>
};

//call function which is not react function.

const getNames = () =>{ 
    return "React Names"
};

export default NestedFunction;
