import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../utils/UserContext'
import "./Main.css"

export const LogIn = () => {
    const history = useHistory();
    const [_loggedInUser, setLoggedinUser] = useContext(UserContext);
    const [formState, setFormState] = useState({email: "", password: ""})

    const login = () => {
        if (formState.password === "test") {
            setLoggedinUser(formState.email)
            localStorage.setItem('email', formState.email)
            history.push('/home')
        } else {
            alert("Invalid password")
        }
    }

    function updateState(fields) {
        setFormState({...formState, ...fields})
    }

    return (
        <div>
            <h1>Login credentials:</h1>
            <div className="loginForm">
            <span>Email:  </span>
            <input onChange={e => updateState({email: e.target.value})} />
            <br />
            <span>Password:  </span>
            <input
                type="password"
                onChange={e => updateState({password: e.target.value})}/>
                * required
            <br />
            <button className="btn-primary" onClick={() => login()}>Login</button>
            </div>
        </div>
    )
};