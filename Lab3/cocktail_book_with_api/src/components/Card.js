import React from "react";
import "../App.css";

export const Card = ({ cocktail }) => {
  return (
    <>
      {!cocktail && <div className="card">Cocktail info not loaded</div>}
      {!!cocktail && (
        <div className="card">
          <div className="card-body">
            <a href={"recipe/" + cocktail.idDrink}>
              <h2 className="card-title">{cocktail.strDrink}</h2>
            </a>
            <p className="card-text">
              <h3>Instruction: </h3>
              {cocktail.strInstructions}
              <h3> Type of cocktail:</h3> {cocktail.strAlcoholic}.
              <h3> Type of glass:</h3> {cocktail.strGlass}.
            </p>
          </div>
          <img
            className="card-img"
            src={cocktail.strDrinkThumb}
            alt="Cocktail"
          />
          <hr />
        </div>
      )}
    </>
  );
};
