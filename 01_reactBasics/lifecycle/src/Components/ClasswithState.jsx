import React, { Component } from "react";
import faker from "faker";

export default class ClassWithState extends Component {
  //1. help access the state with some object
  //2. how to update the state from default value
  constructor() {
    super();
    this.state = {
      account: "Demo",
      accountName: "Demo name",
    };
  }

  //Will only render once ..
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        account: faker.finance.account(),
        accountName: faker.finance.accountName(),
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h4>This is Class Component with state</h4>
        <p>
          This is account number {this.state.account} and this is account type{" "}
          {this.state.accountName}
        </p>
      </div>
    );
  }
}