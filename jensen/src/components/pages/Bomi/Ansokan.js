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
    
    editTitle,
    editFullName,
    editEmail,
    editMajor
    }) =>{
    
        // handleChange = (e) => {
        //     this.setState({
        //         [e.target.fullName]: e.target.value
        //     })
        // }

        // handleSubmit = (e) => {
        //     e.preventDefault();

        // }

    return(
        <div>
            <h3>{title}</h3>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{major}</p>
            <p>{`ID: ${id}`}</p>
            <button onClick={()=> onDelete(id)}>Delete ansökan</button>
        
            <button onClick ={()=> onUpdate(id)}> Update ansökan</button>

            <form>
            <input value={updateTitle} onChange={(e) => {
                        editTitle(e.target.value)
                        console.log(updateTitle)
                    }} 
                    type="text" 
                    name="updateTitle"  
                    placeholder=" Write Title..."/>
            <input value={updateFullName} onChange={(e) => {
                        editFullName(e.target.value)
                        console.log(updateFullName)
                    }} 
                    type="text" 
                    name="updateFullName"  
                    required="required" 
                    placeholder=" Write Full Name" />
            <input value={updateEmail} onChange={(e) => {
                        editEmail(e.target.value)
                        console.log(updateEmail)
                    }} 
                    type="email" 
                    name="updateEmail" 
                    required="required" 
                    placeholder=" Write E-mail"/>
            <input value={updateMajor} onChange={(e) => {
                        editMajor(e.target.value)
                        console.log(updateMajor)
                    }} 
                    type="text" 
                    name="updateMajor" 
                    required="required" 
                    placeholder=" Write Major"/>
            </form>
        </div>

    )
}

export default Ansokan;