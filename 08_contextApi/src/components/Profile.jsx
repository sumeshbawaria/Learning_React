import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)      // syntax   // accessing from the userContext
    console.log(user);
    

    if(!user) return <div>Please login</div>

    return <div>Welcome name: {user.username} <br /> 
    password: {user.password}
    </div>
}

export default Profile