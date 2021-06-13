import React from 'react';
import '../App.css';

export const Card = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Cocktail NAME</h2>
                    <p className="card-text">Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                    Cutty sark scots whisky van winkle family reserve zombie,
                    springbank lime rickey, widow’s cork. Glen scotia redline
                    godfather bowmore bull shot aberlour gummy and coke snowball
                    aberfeldy harvey wallbanger. Oban four horsemen critty bo old
                    rip van winkle negroni, bloody aztec, crown royal paradise
                    champagne cocktail redline flaming volcano. Stinger chimayó
                    cocktail lemon split brandy manhattan presbyterian, old rip
                    van winkle calvert glenfarclas toro rojo. Smirnoff mai-tai
                    long island iced tea. French 75 three wise men glengoyne,
                    bacardi orgasm balvenie strathmill bunnahabhain el presidente,
                    dailuaine house of lords mudslide blue blazer.</p>
                    <button href="#" className="btn btn-primary">Go somewhere</button>
                </div>
                <img className="card-img" src="https://www.elizabethskitchendiary.co.uk/wp-content/uploads/2017/07/Percy-on-the-Beach-Cocktail-4.jpg" alt="Cocktail"></img>
            </div>

        );
}
