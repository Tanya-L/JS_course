import React, { useContext } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

export const UserProfile = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedinUser] = useContext(UserContext);

  const reDirect = (url) => {
    history.push(url);
  };

  const logout = () => {
    localStorage.removeItem("email");
    setLoggedinUser();
    reDirect("/home");
  };

  return (
    <div className="profile-dropdown">
      <span>Signed in as: {loggedInUser}</span>
      <div className="profile-dropdown-content">
        <a onClick={() => reDirect("/recipe")}>Recipes</a>
        <a onClick={() => reDirect("/user")}>User Info</a>
        <hr />
        <a onClick={() => logout()}>Logout</a>
      </div>
    </div>
  );
};
