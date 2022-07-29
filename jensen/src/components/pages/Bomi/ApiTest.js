//Båmi 

import {useState} from 'react';
import { get, post, put, taBort} from './utility/apib';
import React from 'react';
import HeaderB from './HeaderB';


const ApiTest =()=> {
            const [id, setId] = useState(0)
            const [counter, setCounter] = useState(0)
            const [infos, setInfos] = useState([])


    return(
        <>
        <div style={{marginTop:"150px",marginLeft:"50px"}}>
        
        <input value={id} onChange={(event)=> setId(event.target.value)}>
        </input>

        <button onClick={()=>{
        get('./api/read').then((response)=>
            setInfos(response.data))
        }}>READ</button>

        <button onClick ={()=>{
        post('/api/create', {
            id: counter,
            firstname : "Loem" + counter,
            lastname: "Ipsum" + counter,
            email: "email@email" + counter,
            major: "Frontend Webbsäkerhet" + counter,
        })
        setCounter((previous) =>previous + 1)
        }}>CREATE</button>

        <button onClick={()=>{
            put(`/api/update/${id}`,{
            firstname : "Ipsem",
            lastname: "Jensen",
            email: "Jensen@email.com",
            major: "Updated major",
            }).then((response)=>console.log(response))
        }}>UPDATE</button>

        <button onClick={()=>{
        taBort(`/api/delete/${id}`)
        }}>DELETE</button>

        <div>
        {infos.map((info)=>{
        
        return <li key={info.id}>
        {info.firstname}
        {info.lastname}
        {info.email}
        {info.major}</li>
        })}
                </div>          
            </div>
            <HeaderB />
        </>

    )
}

export default ApiTest;


