// after making context we will make context provider

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {     //directly passed a children into the Context provider
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider
