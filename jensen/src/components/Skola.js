import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalState'

export const Skola = ({ skola }) => {
  const { deleteSkola } = useContext(GlobalContext);



  return (
    <li className={skola.text}>
      Skola: {skola.text} 
      <br></br><br></br>
      Lärare: {skola.teacha} 
      <button onClick={() => deleteSkola(skola._id)} className="delete-btn">x</button><br></br>
    </li>
  )
}
