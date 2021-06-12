import React from 'react';
import '../App.css';

export const Card = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Cocktail NAME</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">Go somewhere</button>
                </div>
                <img className="card-img-top" src="https://www.elizabethskitchendiary.co.uk/wp-content/uploads/2017/07/Percy-on-the-Beach-Cocktail-4.jpg" alt="Cocktail"></img>
            </div>

        );
}
