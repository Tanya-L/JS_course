import React, { useContext } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { UserProfile } from "./UserProfile";

export const NavBar = () => {
  const history = useHistory();
  const [loggedInUser] = useContext(UserContext);

  const displayUserEmailIfAuthenticated = () => {
    return loggedInUser ? (
      <div className="signIn">
        <UserProfile />{" "}
      </div>
    ) : (
      <span className="signIn" onClick={() => history.push("/login")}>
        Sign In
      </span>
    );
  };

  return (
    <div className="navBarContainer">
      <span className="navBarLogo" onClick={() => history.push("/login")}>
        Cocktail Book
      </span>{" "}
      <br />
      {displayUserEmailIfAuthenticated()}
    </div>
  );
};
