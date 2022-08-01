const Ansokan = ({id, 
    title, 
    fullName, 
    email, 
    major, 
    onDelete, 
    onUpdate,
    updateTitle,
    updateFullName,
    updateEmail,
    updateMajor,
    setUpdateTitle,
    setUpdateFullName,
    setUpdateEmail,
    setUpdateMajor
    }) =>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{major}</p>
            <p>{`ID: ${id}`}</p>
            <button onClick={()=> onDelete(id)}>Delete ansökan</button>
        

            <tr>
            <td><button onClick ={()=> onUpdate(id)}> Update ansökan</button></td>
            </tr>

            <input value={updateTitle} onChange={(e) => {
                        setUpdateTitle(e.target.value)
                        console.log(updateTitle)
                    }} type="text" name="update" placeholder=" Write Title"/>
            <input value={updateFullName} onChange={(e) => {
                        setUpdateFullName(e.target.value)
                        console.log(updateFullName)
                    }} type="text" name="update" placeholder=" Write Full Name" />
            <input value={updateEmail} onChange={(e) => {
                        setUpdateEmail(e.target.value)
                        console.log(updateEmail)
                    }} type="email" name="email" placeholder=" Write E-mail"/>
            <input value={updateMajor} onChange={(e) => {
                        setUpdateMajor(e.target.value)
                        console.log(updateMajor)
                    }} type="text" name="update" placeholder=" Write Major"/>
        </div>

    )
}

export default Ansokan;