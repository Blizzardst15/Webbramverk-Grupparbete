import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import SkolaForm from '../components/SkolaForm'
import SkolaItem from '../components/SkolaItem'
import Spinner from '../components/Spinner'
import { getSkolor, reset } from '../features/skolor/skolaSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {skolor, isLoading, isError, message} =  useSelector((state) =>
  state.skolor)

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

 

    if(!user){
      navigate('/login')
    }

    dispatch(getSkolor())

    return () => {
      dispatch(reset())
    }
  },[user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
    <section className ="heading">
    <h1>Hallå {user && user.name}</h1>
    <p>Skolor</p>
      </section>

      <SkolaForm />
      
      <section className='content'>
        {skolor.length > 0 ? (
          <div className='skolor'>
            {skolor.map((skola) => (
              <SkolaItem key={skola._id} skola={skola} />
            ))}
          </div>
        ) : (
          <h3>You have not set any skolor</h3>
        )}
      </section>
   </>
  )
}

export default Dashboard