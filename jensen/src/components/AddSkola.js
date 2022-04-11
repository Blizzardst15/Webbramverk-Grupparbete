import React, {useState, useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

export const AddSkola = () => {
  const [text, setText] = useState('');
  const [teacha, setTeacha] = useState('');

  const { addSkola } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newSkola = {
      text,
      teacha
    }

    addSkola(newSkola);
  }

  return (
    <>
      <h3>Lägg till skola</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Lägg till skola här" />
        </div>
        <input type="text" value={teacha} onChange={(e) => setTeacha(e.target.value)} placeholder="Lägg till lärare här" />
        <button className="btn">Lägg till skola</button>
      </form>
    </>
  )
}
