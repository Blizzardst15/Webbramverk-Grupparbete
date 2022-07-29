import React, {useState, useEffect} from 'react';





const Ansokan = () => {
    description,
    title,
    fullName,
    email,
    major,
    onDelete,
    id, updateAnsokan,
    updateDescription,
    updateTitle,
    updateFullName,
    updateEmail,
    updateMajor,
    editTitle,
    editDescription,
    editFullName,
    editEmail,
    editMajor 


return (
    <div>
    <input value={updateFullName} onChange={(e) => {
                        editFullName(e.target.value)
                        console.log(updateFullName)
                    }} type="text" className="edit" placeholder="Full name" />
    <input value={updateDescription} onChange={(e) => {
                        editDescription(e.target.value)
                        console.log(updateDescription)
                    }} type="text" className="edit" placeholder="Description" />
    <input value={updateTitle} onChange={(e) => {
                        editTitle(e.target.value)
                        console.log(updateTitle)
                    }} type="text" className="edit" placeholder="Title" />

    <input value={updateEmail} onChange={(e) => {
                        editTitle(e.target.value)
                        console.log(updaEmail)
                    }} type="text" className="edit" placeholder="Email" />

    <input value={updateMajor} onChange={(e) => {
                        editTitle(e.target.value)
                        console.log(updateMajor)
                    }} type="text" className="edit" placeholder="Major" />
    </div>
)
}

export default Ansokan