import React from 'react'

const ConditionalBasics = (props) => {

    const [signIN] = React.useState("sign IN");
    const [signOut] = React.useState("sign Out");
    // const [auth] = React.useState(false);
    const[printName,setPrintName] =React.useState(false)
    

    React.useEffect(()=>{
        setTimeout(()=>{
setPrintName(true)
        },3000)
    },[])

    if (printName) {
        return (
            <div>
                <h1>This is Conditional Rendering</h1>
                <h3>{signIN}</h3>


            </div>
        )
    }
    else {
        return (
            <div>
                <h1>This is Conditional Rendering</h1>
                <h3>{signOut}</h3>
            </div>

        )
    }

    
}

export default ConditionalBasics;
