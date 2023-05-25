import React from "react";

import "./App.css";
import NavBar from "./components/navBar/NavBar";
import HomeView from "./pages/HomeView/HomeView";
function App() {
  return (
    <div className="mainPage">
     <NavBar />
     <HomeView />
    </div>
  );
}

export default App;
