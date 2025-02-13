import React from 'react'
import { useContext } from 'react';
import {UserContext} from '../context/userContext'
import { useState } from 'react';



function Login() {

    const {setUser} = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault;
        setUser({username,password})
    }

  return (
    <>
        <input type="text" 
        placeholder='Enter your name'
            value={username}
            onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value)
            }}
        />
        <br/>
        <input type="text" 
        placeholder='Enter your password'
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
        />
        <button 
        onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login