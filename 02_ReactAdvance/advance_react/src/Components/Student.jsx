import React from 'react'
import PropTypes from 'prop-types'

const Student =(props) => {
    return(
        <div>
            <h2>This is with function component</h2>
            <h3>Student Object Information</h3>
            <p>Name:{props.name}</p>
            <p>ID:{props.id}</p>
            <p>School Name:{props.schoolName}</p>
            <p>Some Object Details: {props.details.class}</p>
            <p>Some Array: {props.SomeArray}</p>
        </div>
    )
};

export default Student;

Student.propTypes ={
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    schoolName: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    SomeArray: PropTypes.array.isRequired,
};

