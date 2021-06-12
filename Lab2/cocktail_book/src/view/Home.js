import React, { useContext } from 'react'
import './Main.css'
import { UserContext } from '../utils/UserContext'
import {Recipe} from "./Recipe";

export const Home = () => {

    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    return (
        <div className="mainContainer">
            {/*<h1>Currently logged In user: {loggedInUser}</h1>*/}
            <h1>Welcome to Cocktail Application</h1>
            <Recipe />
        </div>

    )
}