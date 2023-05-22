import React from "react";

import "./App.css";
import NavigationBar from "./components/navBar/navBar";
import HomeView from "./pages/HomeView/HomeView";
function App() {
  return (
    <div className="mainPage">
     <NavigationBar />
     <HomeView />
    </div>
  );
}

export default App;
