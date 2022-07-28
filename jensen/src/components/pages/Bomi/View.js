import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import './View.css';

const View = () => {
  const [user, setUser] = useState(null);
  const {id} = useParams();

  useEffect(()=> {
    if(id) {
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser =  async (id) => {
    const response = await axios.get(`http://localhost:8080/user/${id}`)
    if (response.status === 200) {
      setUser({...response.data[0] });
  
    }
  }
  return (
    <div style={{marginTop: "150px"}}>
      <div className="card">
        <div className="card-header">
          <p>Ansäkan detalj</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <strong>{user && user.name}</strong>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user && user.email}</span>
          <br />
          <br />
          <strong>Major: </strong>
          <span>{user && user.major}</span>
          <br />
          <br />
          <Link to ="/">
            <button className="btn btn-edit"> Go Back</button>
          </Link>
        </div>
      </div>
        <h2> View</h2>
    </div>
  )
}

export default View