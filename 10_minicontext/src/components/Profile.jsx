// In this we will see how data is access

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
   
    if(!user) return <div>please Login</div>
    else{
        
    return <div>Welcome {user.username}</div>

    }
    

}

export default Profile