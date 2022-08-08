import React from "react";

const EditbleRow = () => ({
    editFormData,
    hadleEditFormChange,
    handleCancelClick,
    

}) => {
    return (
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter a title"
                name= "title"
                value={editFormData.title}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Enter a fullName"
                name= "fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Enter an email"
                name= "email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Enter a major"
                name= "major"
                value={editFormData.major}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>
                Cancel
            </button>
            </td>
        </tr>
    )
}

export default EditbleRow;
