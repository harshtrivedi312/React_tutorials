import React from 'react'

function FunctionWithProps(){
    return(
        <div>
            <PassAnArg info="SomeInfo" name ="SomeName"></PassAnArg>
            <WithOutProps info="WithOutProps" name="WithoutPropNames"></WithOutProps>


        </div>
    )
}

//with props .......
function PassAnArg(props){
    return(
        <div>
            <p>{props.info}</p>
            <p>{props.name}</p>
        </div>
    );
}


//without Props

function WithOutProps({info, name}){
    return(
        <div>
            <p>{info}</p>
            <p>{name}</p>
        </div>
    );
}


export default FunctionWithProps;