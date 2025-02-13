import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../context/userContext'

function Profile() {
const {user} = useContext(UserContext);

if(user) return <div>Welcome: {user.username}</div>

return <div>Please login</div>
}

export default Profile