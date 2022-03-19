
import React, {useState} from "react";
import "./Info.css";
import data from "./mock-data.json"


const Info =() =>{
  const[contacts, setContacts] = useState(data);  
  const[addFormData, setAddFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    major: ''
  });

  const handleAddFormChange = (event)=>{
    event.preventDefault();

  const fieldName = event.target.getAttribute('name')
  const fieldValue= event.target.value;

  const newFormData = {...addFormData};
  newFormData[fieldName]= fieldValue;

  setAddFormData(newFormData);
  }
  return (<div className="app-container">
  <table>
    <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName </th>
        <th>Email</th>
        <th>Major </th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact)=> (
          <tr>
          <td>{contact.firstName}</td>
          <td>{contact.lastName}</td>
          <td>{contact.email}</td>
          <td>{contact.major}</td>
          </tr>
      ))}
    </tbody>
  </table>

  <h2>Add Ansökan här !</h2>
  <form>
    <input 
    type="text" 
    name="firstName" 
    ruquired="required" 
    placeholder="Enter a firstName..."
    onChange = {handleAddFormChange}
    />
    <input 
    type="text" 
    name="lastName" 
    ruquired="required" 
    placeholder="Enter a lastName..."
    onChange = {handleAddFormChange}
    />
    <input 
    type="text" 
    name="major" 
    ruquired="required" 
    placeholder="Enter a major..."
    onChange = {handleAddFormChange}
    />
    <input 
    type="text" 
    name="email" 
    ruquired="required" 
    placeholder="Enter an email..."
    onChange = {handleAddFormChange}
    />
    <button type="submit">Add</button>
  </form>
  </div>
  );
};

export default Info;




