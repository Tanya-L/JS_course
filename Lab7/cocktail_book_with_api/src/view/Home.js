import React, { useEffect, useState } from "react";

import "./Main.css";
import { CocktailList } from "../components/CocktailList";
import { NavBar } from "../components/NavBar";
export const RecipesContext = React.createContext({});

export const Home = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    if (recipes == null) {
      const url = `http://localhost:7777/cocktails/`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data);
        });
    } else {
      console.log(recipes);
    }
  }, [recipes]);

  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <h1>Welcome to Cocktail Application</h1>
        <RecipesContext.Provider value={recipes}>
          <CocktailList
            title={"All cocktails starting with A"}
            cocktails={recipes}
          />
        </RecipesContext.Provider>
      </div>
    </>
  );
};
