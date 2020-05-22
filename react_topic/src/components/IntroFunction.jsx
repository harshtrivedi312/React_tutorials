/**
 * 1.function component is simple function with return type as html
 * 2. we can extend class or any object in function
 * 3.function does not have render function
 * 4.function does not have constructor and .this keyword
 * 
 * 
 */


import React from "react";
// Hot to pass js variable or function inside the react function
function IntroFunction(){
    const greet = "This is function as component";
    const someString = "This is string";
    let bool ="True" //will not print unless make as string
    let number = 12
    let numbers =[11,12,13,14];
    let undif = undefined; //will not print
    let user ={
        name: 'Mike',
        id:1001011
    };

    return(
        <div>
            <h5>{greet}</h5>
            <p>{someString}</p>
            <p>{bool}</p>
            <p>{number}</p>
            <p>{numbers}</p>
            <p>{undif}</p>
            <p>
                userName: {user.name} Id: {user.id}
            </p>
        </div>
    )
}

export default IntroFunction;
