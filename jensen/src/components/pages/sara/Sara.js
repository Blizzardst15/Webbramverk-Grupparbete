import React from "react";
import "../style.css";
import "./Sara.css";
import Accordion from "./Accordion";
import { get, put, taBort, post } from "./api"
import { useState, useEffect } from 'react';


const Sara = () => {

    const [fullName, setFullName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [teachersNames, setTeachersName] = useState([])
    const [updateFullName, editFullName] = useState('')
    const [updateTitle, editTitle] = useState('')
    const [updateDescription, editDescription] = useState('')

    const addTeacher = () => {
        const newTeachersName = {
            id: Date.now(),
            title,
            description,
            bankAccount: '0000000',
            fullName
        }

        post('/api/create', newTeachersName)

        setTeachersName([...teachersNames, newTeachersName])
        console.log('teacher:', teachersNames)
    }


    useEffect(() => {
        get('/api/all').then(
            (res) => setTeachersName(res.data),
            console.log('teachersNames:', teachersNames))
    }, [setTeachersName]);





    const deleteTeacher = (id) => {
        const filterTeachers = teachersNames.filter((teachername) => teachername.id !== id)
        console.log(id, filterTeachers)
        setTeachersName(filterTeachers)

        taBort(`/api/delete/${id}`)

    }

    const updateTeacher = (id) => {



        console.log('description:', updateDescription, 'title:', updateTitle, 'fullName:', updateFullName)

        put(`/api/update/${id}`, {
            title: "updateTitle",
            fullName: updateFullName,
            description: updateDescription,
            bankAccount: "update bankAccount"
        }).then((res) => {
            get('/api/all').then(
                (res) => setTeachersName(res.data)
            )
        })

    }

    return (

        <div className="container">
            <div>
                <label> <input value={fullName} placeholder="Full name" onChange={(event) => {
                    setFullName(event.target.value)
                }} />
                </label>
                <label> <input value={title} placeholder="Title" onChange={(event) => {
                    setTitle(event.target.value)
                }} />
                </label>
                <label> <input value={description} placeholder="Description" onChange={(event) => {
                    setDescription(event.target.value)
                }} />
                </label>
            </div>

            <button onClick={addTeacher}>Add new teacher</button>
            {teachersNames.map(({ fullName, description, title, id }) => {
                return <Accordion
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    fullName={fullName}
                    onDelete={deleteTeacher}
                    updateTeacher={updateTeacher}
                    editFullName={editFullName}
                    editDescription={editDescription}
                    updateDescription={updateDescription}
                    updateFullName={updateFullName}
                    updateTitle={updateTitle}
                />
            })}

            <div>

            </div>
        </div>
    );
};

export default Sara;