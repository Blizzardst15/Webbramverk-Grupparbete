import React, {useState, useEffect} from 'react';
// import {useNavigate, useLocation, useParams} from "react-router-dom";
import { useLocation, useParams} from "react-router-dom";
import './AddEdit.css';
import { toast } from 'react-toastify';
import axios from "axios";

const initialState = {
  name:"",
  email: "",
  major: "",
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const {name, email, major} = state;

  // const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=> {
    if(id){
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser =  async (id) => {
    const response = await axios.get(`http://localhost:8080/user/${id}`)
    if (response.status === 200) {
      setState({...response.data[0] });
        // toast.success(response.data);
        // getUsers();
    
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:8080/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:8080/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !major) {
      toast.error("Please provide value into each input")
    } else {
      if(!id){
        addUser (state);
      } else {
        updateUser(state, id);
      }

      // setTimeout(() =>navigate.push("/"), 300);
    }
  
  };


  return (
    <div style={{marginTop: "90px"}}>
      <form
        style={{
          margin:"auto",
          padding: "12px",
          maxwidth: "350px",
          alignContent: "center",
        }}
        onSubmit = {handleSubmit}
      >
        <label htmlFor="name">fullName</label>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Write firstName and lastName"
        onChange={handleInputChange}
        value={name}
        />
        
        <label htmlFor="email">E-mail</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Write E-mail"
        onChange={handleInputChange}
        value={email}
        />
        <label htmlFor="major">Major</label>
        <input
        type="text"
        id="major"
        name="major"
        placeholder="Write Major"
        onChange={handleInputChange}
        value={major}
        />
        {/* <input type="submit" value="Add"/> */}

        <input type= "submit" vlaue= {id ? "Update" : "Add" } />
      </form>
    </div>
  );
};

export default AddEdit;