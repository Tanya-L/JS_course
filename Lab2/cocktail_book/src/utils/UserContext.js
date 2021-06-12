import React, { useState, createContext } from 'react'

export const UserContext = createContext(null)
export const UserProvider = (props) => {
    const savedUser = localStorage.getItem("email") || "";
    const [loggedInUser, setLoggedInUser] = useState(savedUser)

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {props.children}
        </UserContext.Provider>
    )
}