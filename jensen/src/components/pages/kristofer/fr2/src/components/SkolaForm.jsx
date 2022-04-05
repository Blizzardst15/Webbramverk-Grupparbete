import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { createSkola } from '../features/skolor/skolaSlice';


function SkolaForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createSkola({text}))
        setText('')     
    }


  return ( 
  
  <section className='form'>
    <form onSubmit= {onSubmit}>
        <div className="form-group">
            <label htmlFor="text"> Skola</label>
            <input type="text" name='text' id='text' value = {text}
            onChange ={(e) => setText(e.target.value)} />
    </div>

   <div className="form-group">
    <button className="btn btn-block" type="submit"> Lägg till skola </button>
    </div>
    </form>
  </section>
  )
}

export default SkolaForm