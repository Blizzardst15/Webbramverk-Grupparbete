import {useDispatch} from 'react-redux'
import {deleteSkola} from '../features/skolor/skolaSlice'

function SkolaItem({ skola }) {
    const dispatch = useDispatch()


  return (
    <div className="skola">
        <div>{new Date(skola.createdAt).toLocaleString
            ('se-SE')} </div>
        <h2>{skola.text}</h2>
        <button onClick={() => dispatch(deleteSkola(skola._id))} className="close">X</button>
    </div>
  )
}

export default SkolaItem