import React, { useEffect, useState } from "react";
import "./Main.css";
import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";

export const Recipe = ({ match, location }) => {
  const [cocktail, setCocktail] = useState(null);
  const id = match.params.id;

  useEffect(() => {
    if (cocktail == null && id) {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCocktail(data.drinks[0]);
        });
    }
  }, [cocktail]);

  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <Card cocktail={cocktail} />
      </div>
    </>
  );
};
