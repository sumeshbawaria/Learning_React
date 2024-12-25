import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2 className='text-center my-5 bg-blue-400 p-2'>Login</h2>
        <div className="flex flex-col justify-center items-center">

        <input type="text" 
        className='w-1/3 border-black border p-2 rounded-md my-1'
        placeholder='Username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>

        <input type="text" 
        className='w-1/3 border-black border p-2 rounded-md '
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>

        <div className="w-1/3 flex justify-end items-end">

        <button
        className=' bg-blue-500 border px-2 py-1 rounded-md my-3'
        onClick={handleSubmit}>
          Submit
        </button>

        </div>
        </div>
    </div>
  )
}

export default Login