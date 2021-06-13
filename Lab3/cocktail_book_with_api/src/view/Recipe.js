import React from 'react'
import './Main.css'
import {CocktailList} from "../components/CocktailList";

export const Recipe = () => {
    return (
        <div className="mainContainer">
            <CocktailList />
        </div>
    )
}