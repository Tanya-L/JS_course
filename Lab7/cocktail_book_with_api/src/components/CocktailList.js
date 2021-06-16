import React, { useContext } from "react";
import "../App.css";
import { Card } from "./Card";
import { RecipesContext } from "../view/Home";

export const CocktailList = ({ title }) => {
  const cocktails = useContext(RecipesContext);

  return (
    <div className="container">
      <h1>{title}</h1>

      {!cocktails && <p>Loading...</p>}

      {cocktails && (
        <div className="row">
          {cocktails.drinks.map((c) => (
            <Card cocktail={c} />
          ))}
        </div>
      )}
    </div>
  );
};
