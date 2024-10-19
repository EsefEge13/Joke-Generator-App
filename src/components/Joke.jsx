import { useContext } from 'react'
import { JokeContext } from './context/JokeContext'

function Joke() {

    const {joke} = useContext(JokeContext)
  return (
    <p>{joke}</p>
  )
}

export default Joke