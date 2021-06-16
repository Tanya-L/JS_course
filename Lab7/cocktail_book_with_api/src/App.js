import React, { useContext, useEffect, useState } from "react";
import { Routing } from "./routes/Routing";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./utils/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routing />
    </UserProvider>
  );
};

export default App;
