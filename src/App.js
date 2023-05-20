import React from "react";

import "./App.css";
import UsersListsFromAPI from "./components/usersListsFromAPI";
import ButtonChangeTheme from "./components/buttonChangeTheme";
import NavigationBar from "./components/navBar/navBar";
import HomeView from "./pages/HomeView/HomeView";
function App() {
  return (
    <div>
     <NavigationBar />
     <HomeView />
    </div>
  );
}

export default App;
