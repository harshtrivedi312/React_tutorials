import React, { useState } from "react";
import faker from "faker";

function FunctionWithState() {
    //For String Object
    const [account, setAccount] = useState("Demo");
    //For Number Object
    const [count, setCount] = useState(0);
    //For Object
    const [name, setName] = useState({ firstName: "TBD", lastName: "TBD " });
    //For an Array
    //TODO

    const addCount = () => {
        setCount(count + 1);
    };
    const updateName = () => {
        setInterval(() => {
            setName({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
            });
        }, 2000);
    };
    return (
        <div>
            <h4>This is Function Component with state</h4>
            <p
                onMouseDown={() => {
                    return setAccount(faker.finance.accountName);
                }}
            >
                This is account number {account} and this is account and
      </p>
            <p onMouseDown={updateName}>
                User name is: {name.firstName} and {name.lastName}
            </p>
            <h5>Count Value: {count}</h5>
            <button onClick={addCount}>add</button>
        </div>
    );
}

export default FunctionWithState;