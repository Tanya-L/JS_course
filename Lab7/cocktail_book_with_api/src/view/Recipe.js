import React, { useEffect, useState } from "react";
import "./Main.css";
import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";

export const Recipe = ({ match, location }) => {
  const [cocktail, setCocktail] = useState(null);
  const id = match.params.id;

  useEffect(() => {
    if (cocktail == null && id) {
      const url = `http://localhost:7777/cocktails/?id=${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCocktail(data);
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
