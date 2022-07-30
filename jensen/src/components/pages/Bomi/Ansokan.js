const Ansokan = ({id, descrition, title, fullName, email, major, onDelete}) =>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{major}</p>
            <p>{`ID: ${id}`}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>


        </div>

    )
}

export default Ansokan;