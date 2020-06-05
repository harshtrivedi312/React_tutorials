import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Employee extends Component {

    render() {
        return (
            <div>
                <h2>This is with class component</h2>
                <h3>Employee Object Information</h3>
                <p>Name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
                <p>ID: {this.props.id}</p>
                <p>Details: {this.props.details.dept} </p>
                <p>PhoneNUmber:{this.props.numbers}</p>
                <ul>extention:{this.props.numbers.map((num,index) => {
                    return <li key={index}>{num}</li>
                })}

                </ul>
            </div>
        )
    }
}

Employee.propTypes = {

    name: PropTypes.string,
    age: PropTypes.number,
    id: PropTypes.number.isRequired,
    details: PropTypes.object.isRequired,
    numbers: PropTypes.array.isRequired,
}

export default Employee;
