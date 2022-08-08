import React, {useState, Fragment} from 'react'
import './AnsokanTable.css'
import {nanoid} from "nanoid" ;

import data from './ansokan-data.json';
import ReadOnlyRow from './component/ReadOnlyRow';
import EditableRow from './component/EditableRow';



const AnsokanTable = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
    
        title: '',
        fullName: '',
        email: '',
        major:''
    });

    const [editFormData, setEditFormData] = useState({
        title: '',
        fullName: '',
        email: '',
        major:''
    })

    const [editContactId, setEditContactId]= useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const filedName = event.target.getAttribute("name");
        const filedValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[filedName]= filedValue;

        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            title: addFormData.title,
            fullName: addFormData.fullName,
            email: addFormData.email,
            major: addFormData.major
        }

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit =(event)=> {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            title: editFormData.title,
            fullName: editFormData.fullName,
            email: editFormData.email,
            major: editFormData.major
        };

        const newContacts = [...conatacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);

        
    }
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            title: contact.title,
            fullName: contact.fullName,
            email:contact.email,
            major: contact.major
        };
        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts(newContacts);
    };

return (
    <div >
    <hr></hr> 
    <h4>Excempel CRUD Ansökan Test </h4>
    <div className = "new-table">
        <form>
        <table>
            <thead>
            <tr>
                    <th> Title </th>
                    <th> FullName </th>
                    <th> Email </th>
                    <th> Major </th>
                    <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {contacts.map((contact) =>(
                <Fragment>
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
        <h5> Add a apply</h5>
        <form onSubmit={handleAddFormSubmit}>
            <input 
            type="text"
            name = "title"
            placeholder = "title"
            onChange={handleAddFormChange}
            />
            <input 
            type="text"
            name = "fullName"
            required="required"
            placeholder = "FullName"
            onChange={handleAddFormChange}
            />
            <input 
            type="email"
            name = "email"
            required="required"
            placeholder = "Email"
            onChange={handleAddFormChange}
            />
            <input 
            type="text"
            name = "major"
            required="required"
            placeholder = "major"
            onChange={handleAddFormChange}
            />
            <button submit ="submit">Add ansökan test </button>
        </form>
    
    </div>

    </div>
)
}

export default AnsokanTable