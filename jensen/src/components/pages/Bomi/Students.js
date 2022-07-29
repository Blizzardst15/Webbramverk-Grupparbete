//Båmi

import React from 'react';
import Ansokan from "./Ansokan";
import {get, put, taBort, post} from "./api";
import {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

const Students = () => {


  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [major, setMajor] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ansokansNames, setAnsokansName] = useState([])
  const [updateFullName, editFullName] = useState('')
  const [updateTitle, edititle] = useState('')
  const [updateDescription, editDescription] = useState('')
  const [updateEmail, editEmail] = useState('')
  const [updateMajor, editMajor] = useState('')

  const addAnsokan = () => {
    const newAnsokansName = {
      id: Date.now(),
      title,
      description,
      fullName,
      email,
      major
    }

    post('/api/create', newAnsokansName)

    setAnsokansName([...ansokansNames, newAnsokansName])
    console.log('ansokan:', ansokansNames)
  }

  useEffect(()=> {
    get('/api/read').then(
      (res) => setAnsokansName(res.data),
      console.log('ansokansNames:', ansokansNames)
      )
  }, [setAnsokansName]);

  const deleteAnsokan = (id) => {
    const filterAnsokans = ansokansNames.filter((ansokanname) => ansokanname.id !== id)
    console.log(id, filterAnsokans)
    setAnsokansName(filterAnsokans)

    taBort(`/api/delete/${id}`)

  }

  const updateAnsokan = (id) => {

    console.log('description:', updateDescription, 'title:', updateTitle,'fullName:', updateFullName,'updateEmail:', updateEmail, 'updateMajor:', updateMajor )

    put(`/api/updadte/${id}`, {
      title: updateTitle,
      description: updsateDescription,
      fullName: updateFullName,
      email: updateEmail,
      major: updateMajor
    }).then((res) => {
      get('/api/read').then(
        (res) => setAnsokansName(res.data)
      )
    })
  }

  return (
    <div>
      <div>
      <h2>Jensen Utbildningar</h2>
      <label> <input value={description} placeholder="Description" onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                </label>

      <label> <input value={title} placeholder="FullName" onChange={(e) => { 
      <label> <input value={fullName} placeholder="Full name" onChange={(e) => {
                    setFullName(e.target.value)
                }} />
                </label>
                    setTitle(e.target.value)
                }} />
                </label>
              
      <label> <input value={email} placeholder="E-mail" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                </label>

      <label> <input value={major} placeholder="Major" onChange={(e) => {
                    setMajor(e.target.value)
                }} />
                </label>
    </div>

    <button onClick={addAnsokan}> Add ny ansökan</button>
    {ansokansNames.map(({fullName, description, title, id, email, major}) => {
      
      return <Ansokan
      key={id}
      id={id}
      title={title}
      description={description}
      fullName={fullName}
      email={email}
      major={major}
      onDelete={deleteAnsokan}
      updateAnsokan={updateAnsokan}
      editFullName={editFullName}
      editTitle={editTitle}
      editEmail={editEmail}
      editMajor={editMajor}
      editDescription={editDescription}
      updateDescription={updateDescription}
      updateFullName={updateFullName}
      updateEmail={updateEmail}
      updateMajor={updateMajor}
      />
    })}
  
  </div>
  );
};


export default Students

