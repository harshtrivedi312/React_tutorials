import React, { Component } from "react";
import faker from "faker";

//TODO
// 1. have the state where user can set firstName and LastName as full name
// 2. user should be able to set jobTitle and job Area and job type
// 3. we need setup default state and upon html event we should be able to set these data

class ClassWithStateTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "default name",
            jobTitle: " ",
            jobArea: " ",
            jobType: "",
        };
    }

    provideNames = (fullName, jTitle, jArea, jType) => {
        this.setState({
            fullName: fullName,
            jobTitle: jTitle,
            jobArea: jArea,
            jobType: jType,
        });
    };

    componentDidMount() {
        this.provideNames(
            faker.name.firstName() + " " + faker.name.lastName(),
            faker.name.jobTitle(),
            faker.name.jobArea(),
            faker.name.jobType()
        );
    }

    render() {
        return (
            <div>
                <h3>User Information</h3>
                <h4>User Full Name: {this.state.fullName}</h4>
                <h5>Job Title: {this.state.jobTitle}</h5>
                <h5>Job Area: {this.state.jobArea}</h5>
                <h5>Job Type: {this.state.jobType}</h5>
            </div>
        );
    }
}

export default ClassWithStateTwo;
C