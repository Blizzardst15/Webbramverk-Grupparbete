
//by using the find index method so we¨will say cost index...
//pass in arrow function which get the current contact as a parameter

import React, {useState, Fragment} from "react";
import {nanoid} from 'nanoid';
import "./Info.css";
import data from "./mock-data.json"
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

const Info =() =>{

const[contacts, setContacts] = useState(data);  
const[addFormData, setAddFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    major: "",
});

const [editFormData, setEditFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    major:"",
})

const [editContactId, setEditContactId]= useState(null);

const handleAddFormChange = (event)=>{
    event.preventDefault();

const fieldName = event.target.getAttribute('name')
const fieldValue= event.target.value;

const newFormData = {...addFormData};
newFormData[fieldName]= fieldValue;

setAddFormData(newFormData);
};

const handleEditFormChange = (event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
}

const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newContact = {
    id: nanoid(),
    firstName: addFormData.firstName,
    lastName: addFormData.lastName,
    major: addFormData.major,
    email: addFormData.email
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
};

const handleEditFormSubmit = (event) =>{
    event.preventDefault();

    const editedContact = {
    id: editContactId,
    firstName: editFormData.firstName,
    lastName: editFormData.lastName,
    major: editFormData.major,
    email: editFormData.email
    }
    const newContacts =[...contacts];
    const index = contacts.findIndex((contact)=> contact.id === editContactId)
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
};

const handleEditClick = (event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);

const formValues = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    major: contact.major,
    email: contact.email,
}
setEditFormData(formValues);
};

const handleCancelClick = () => {
    setEditContactId(null);
}

const handleDeleteClick = ()=>{
    const newContacts = [...contacts];
    //next we will use the splice method to remove contact object
    //at the given index in the array.

    const index = contacts.findIndex((contact)=> contact.id === editContactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);

}

return (<div className="app-container">
    <h1 style={{marginTop:"30px",textAlign:"center"}}>Ansökan till Jensen YH </h1>
    <form onSubmit={handleEditFormSubmit}>
    <table>
    <thead>
    <tr>
        <th>FirstName</th>
        <th>LastName </th>
        <th>Email</th>
        <th>Major </th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {contacts.map((contact)=> (
        <Fragment>
            {/* <form> */}
          {/* <EditableRow/> */}
            {/* </form> */}
            {editContactId === contact.id ? (
            <EditableRow 
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
            />
            ) : (
            <ReadOnlyRow 
            contact={contact} 
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            />
            )}
        
        </Fragment>
    ))}
    </tbody>
</table>
</form>

<h2>Add din favorit utbilding& info här !</h2>
<form onSubmit={handleAddFormSubmit}>
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
    name="email" 
    ruquired="required" 
    placeholder="Enter an email..."
    onChange = {handleAddFormChange}
    />
    <input 
    type="text" 
    name="major" 
    ruquired="required" 
    placeholder="Enter a major..."
    onChange = {handleAddFormChange}
    />
    <button type="submit">Add</button>
</form>
</div>
);
};

export default Info;







