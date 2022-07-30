import {useState} from 'react';
import Ansokan from './Ansokan';

const Students = () => {

const [id, setId] = useState(0)
const incrementCounter = () => {
  setId((previousValue) => previousValue + 1)
}

const [ title, setTitle] = useState('')
const [fullName, setFullName] = useState('')
const [email, setEmail] = useState('')
const [major, setMajor] = useState('')
const [ansokans, setAnsokans] = useState([])



const addAnsokan = () => {
  console.log(title)

  const newAnsokan = {
    ansokanId: id,
    title: title,
    fullName: fullName,
    email: email,
    major: major,
    // description: 'Jensen YH ansökan'
  }
  setAnsokans([...ansokans, newAnsokan])
  incrementCounter()
}


const deleteAnsokan = (deleteId) =>{
  const filteredAnsokans = ansokans.filter((ansokan) => ansokan.ansokanId !== deleteId)
    setAnsokans(filteredAnsokans)
}
  return (
    <>
      <h3 style={{textAlign:'center'}}>Jensen YH Ansökan</h3> 
      <div style={{display: 'flex', marginLeft: '20px'}}>
        <label>Title: <input value={title} onChange={(event) => {
          setTitle(event.target.value)
        }} /></label>
    
        <label>FullName: <input value={fullName} onChange={(event)=>
        setFullName(event.target.value)}/>
        </label>

        <label>E-mail: <input value={email} onChange={(event)=>
        setEmail(event.target.value)}/>
        </label>

        <label>Major: <input value={major} onChange={(event)=>
        setMajor(event.target.value)}/>
        </label>


      <button onClick={addAnsokan}>Add yh ansökan</button>
      </div>

      {ansokans.map(({ansokanId, title, fullName, email, major})=>{
        return <Ansokan key= {ansokanId} id={ansokanId} title={title} fullName ={fullName} email={email} major={major} onDelete={deleteAnsokan} />
      })}
    </>
  
  );
};

export default Students;