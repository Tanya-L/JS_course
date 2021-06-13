import React from 'react';
import '../App.css';
import { Card } from './Card';

export const CocktailList = () => {
    return (
    <div className= "container">
        <div className="row">
            <h1>Cocktail Library</h1>
        </div>
        <div className="row">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}