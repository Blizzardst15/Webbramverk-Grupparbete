import React from "react";
import "../style.css";
import "./Sara.css";
import Accordion from "./Accordion";
import { get, post, } from "./api"
import { useState } from 'react';



const Sara = () => {

    const [teachersNames, setTeachersName] = useState([])
    const addTeacher = () => {
        const newTeachersName = {
            id: Date.now(),
            title: 'Teacher',
            description: 'English',
            bankAccount: '0000000',
            fullName: 'Sara Razm',
        }

        setTeachersName([...teachersNames, newTeachersName])
        console.log('teacher:', teachersNames)
    }

    // const [id, setId] = useState(0)
    // // get('/api/read').then((data) => console.log(data))
    // post('/api/create', {
    //     id: '1',
    //     title: 'Teacher',
    //     description: 'English',
    //     bankAccount: '0000000',
    //     fullName: 'Sara Razm',
    // })
    return (
        <div className="container">

            <button onClick={addTeacher}>Add new teacher</button>
            {teachersNames.map(({ fullName, description, title, id }) =>
                <Accordion key={id} title={title} description={description} fullName={fullName} />
            )}

            <div>

            </div>
        </div>
    );
};

export default Sara;