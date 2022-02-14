import React from 'react';
import './Student.css';

import Collapsible from 'react-collapsible';

const Student = ({student}) => {

    const getName = (firstName,lastName) => {
        const text = firstName+' '+lastName;
        return text.toUpperCase();
    }

    function calAve(arr) {

        var total = 0;
        var result = arr.map( (x) => total+=(parseInt(x)))/arr.length;
        return (total/arr.length).toFixed(2);
    }


    return (
        <li className="listItem">
            <div className="leftDiv">
                <div className='imgDiv'>
                <img className="circular_image"src={student.pic} />
                </div>
            </div>

            <div className="centerDiv">
                <div className="form-group">
                <h1>{getName(student.firstName,student.lastName)}</h1>
                <div className='info'>
                    <label>Email: </label>
                    <p>{student.email}</p>
                    <label>Company: </label>
                    <p>{student.company}</p>
                    <label>Skill: </label>
                    <p>{student.skill}</p>
                    <label>Average: </label>
                    <p>{calAve(student.grades)}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Student;