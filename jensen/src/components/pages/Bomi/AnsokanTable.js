import React, {useState} from 'react'
import './AnsokanTable.css'

import data from './ansokan-data.json';

import './AnsokanTable.css';


const AnsokanTable = () => {
    const [applys, setApplys] = useState(data);

    const [addFormdata, setAddFormData] = useState({
    
        title: '',
        fullName: '',
        email: '',
        major:''
    })




    const handleAddFormChange = (event) => {
        
    }

return (
    <div>
    <hr></hr> 
    <h4>Excempel CRUD Ansökan Test </h4>
    <div className = "new-table">
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
                {applys.map((applys) =>(
                    <tr>
                        
                        <td>{applys.title}</td>
                        <td>{applys.fullName}</td>
                        <td>{applys.email}</td>
                        <td>{applys.major}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h5> Add a apply</h5>
        <form>
            <input 
            type="text"
            name = "title"
            placeholder = "title"
            />
            <input 
            type="text"
            name = "fullName"
            required="required"
            placeholder = "FullName"
            />
            <input 
            type="email"
            name = "email"
            required="required"
            placeholder = "Email"
            />
            <input 
            type="text"
            name = "major"
            required="required"
            placeholder = "Major"
            />
            <button submit ="submit">Add ansökan test </button>
        </form>
    
    </div>

    </div>
)
}

export default AnsokanTable