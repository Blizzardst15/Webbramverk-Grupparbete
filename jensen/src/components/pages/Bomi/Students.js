import {useState, useEffect} from 'react';
import Ansokan from './Ansokan';
import { get, put, taBort, post } from "./api";

import './AnsokanTable.css';



const Students = () => {

const [id, setId] = useState(0)
const incrementCounter = () => {
  setId((previousValue) => previousValue + 1)
}

const [ title, setTitle] = useState('')
const [fullName, setFullName] = useState('')
const [email, setEmail] = useState('')
const [major, setMajor] = useState('')
const [ansokansNames, setAnsokansName] = useState([])

const [updateTitle, editTitle] = useState('')
const [updateFullName, editFullName] = useState('')
const [updateEmail, editEmail] = useState('')
const [updateMajor, editMajor] = useState('')



const addAnsokan = () => {
  console.log(title, fullName, email, major)

  const newAnsokanName = {
    ansokanId: id,
    title: title,
    fullName: fullName,
    email: email,
    major: major,
  }

  post('/api/create', newAnsokanName)

  setAnsokansName([...ansokansNames, newAnsokanName])
  incrementCounter()

  
  console.log('Add ansokan:', ansokansNames)

}

useEffect(()=> {
  get('/api/read').then(
    (res) => setAnsokansName(res.data),
    console.log('ansokansNames:', ansokansNames)
  )
},[setAnsokansName])


const deleteAnsokan = (deleteId) =>{
  const filteredAnsokans = ansokansNames.filter((ansokan) => ansokan.ansokanId !== deleteId)
    setAnsokansName(filteredAnsokans)

    console.log('deleteId:', filteredAnsokans)

    taBort(`/api/delete/${id}`)
}


const updateAnsokan = (id) => {


  console.log('titlel:', updateTitle, 'fullName:', updateFullName, 'email:', updateEmail, 'major:', updateMajor)

  put(`/api/update/${id}`, {
    title: updateTitle,
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
    <>
      <h3 style={{textAlign:'center'}}>Jensen YH Ansökan</h3> 
      <div style={{display: 'flex',flexDirection: "colum" ,marginLeft: '10px'}}>

        <label>Title: <input value={title} onChange={(event) => {
          setTitle(event.target.value)
        }} /></label>
    
        <label>FullName: <input value={fullName} onChange={(event)=>
        setFullName(event.target.value)}/>
        </label>

        <label>E-mail: <input value={email} onChange={(event)=>
        setEmail(event.target.value)}/>
        </label>

        <label>Major: <input value={major} onChange={(event)=>
        setMajor(event.target.value)}/>
        </label>
        
        <br /><br /> <br /><br />

      <button style ={{position:"relative",color:"blue"}}
        onClick={addAnsokan}>Add yh ansökan</button>
      </div>

      <div className = "new-table">
        <h4>Update Ansökan Test </h4>
        <table>
            <thead>
            <tr>
                    <th> Title </th>
                    <th> FullName </th>
                    <th> Email </th>
                    <th> Major </th>
                
            </tr>
            </thead>
            <tbody>
              
            </tbody>
        </table>
    
    </div>

      {ansokansNames.map(({ansokanId, title, fullName, email, major})=>{
        return <Ansokan 
        key= {ansokanId} 
        id={ansokanId} 
        title={title} 
        fullName ={fullName} 
        email={email} 
        major={major} 
        onDelete={deleteAnsokan} 

        updateAnsokan= {updateAnsokan}
        updateTitle ={updateTitle}
        updateFullName = {updateFullName}
        updateEmail = {updateEmail}
        updateMajor = {updateMajor}
        onUpdate ={updateAnsokan}

        editTitle = {editTitle}
        editFullName = {editFullName}
        editEmail = {editEmail}
        editMajor = {editMajor}

        />
    

      })}
  
    </>
  
  );
};

export default Students;