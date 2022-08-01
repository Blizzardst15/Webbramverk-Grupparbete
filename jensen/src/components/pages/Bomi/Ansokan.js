const Ansokan = ({id, title, fullName, email, major, onDelete, onUpdate}) =>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{major}</p>
            <p>{`ID: ${id}`}</p>
            <button onClick={()=> onDelete(id)}>Delete ansökan</button>
        

            <tr>
            <td><button onClikc ={()=> onUpdate(id)}> Update ansökan</button></td>
            </tr>

        </div>

    )
}

export default Ansokan;