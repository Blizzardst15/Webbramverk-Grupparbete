import React, { useState, useEffect } from "react";
import { get, post, put , remove} from "./utility/api";



const Application = () => {
const [selectedId, setSelectedId]=useState(0)
const [applications, setApplications]=useState([])
const [fullName, setFullName]=useState('')
const [title, setTitle]=useState('')
const [email, setEmail]=useState('')
const [major, setMajor]=useState('')
const [counter, setCounter]=useState(Date.now());
const [id, setId]=useState('');


useEffect(()=>{
  get('/api/read').then((response)=> {
    setApplications(response.data)
  });
},[]);

return (
  <div>
    <form > 
      <div>
      <input type="text"  value={fullName} placeholder="Name" onChange={(e)=>setFullName(e.target.value)} />
      <input type="text" value={title}  placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" value={email}  placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" value={major}  placeholder="Major" onChange={(e)=>setMajor(e.target.value)} />

      <button onClick={()=>{
        const data = {
          title : title,
          fullName : fullName,
          email : email,
          major : major
        }
        post('/api/create', data);
        console.log(data)
        setCounter(Date.now());
        get('/api/read').then((response)=> {
            setApplications(response.data)
        })
      }}>Add</button>
      </div>
      <div>
      <select value={selectedId} onChange={(e)=>setSelectedId(e.target.value)}>
      {
        applications.map((application)=>{
          return(
            <option className="" key={application.id}>{`${application.id}`}</option>
          )
        })
      }
      </select>

      <button onClick={()=>{
        const data = {
          title : title,
          fullName : fullName,
          email : email,
          major : major
        }
        console.log("******************")
        console.log(`/api/update/${selectedId}`)
        console.log("******************")
        put(`/api/update/${selectedId}`,data).then(()=> {
          get('/api/read').then((response)=> {
            setApplications(response.data)
          })
        }
      )}} >Update</button>

      <button onClick={()=>{
        remove(`/api/delete/${selectedId}`);      
        get('/api/read').then((response)=> {
          setApplications(response.data)
        });
      }} >Remove</button>
      </div>
    </form>
    <ul>
    {
      applications.map((application)=>{     
        return (
        <li className="list" key={application.id}>   
          <p>{application.id}</p>
          <p>{application.title}</p>
          <p>{application.fullName}</p>
          <p>{application.email}</p>
          <p>{application.major}</p>
        </li>
        )
      })
    }
    </ul>
  </div>
  );
};


export default Application;