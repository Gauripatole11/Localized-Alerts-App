import React from "react";
import "./App.css";
import MapComponent from "./MapComponent";
import AlertList from "./components/AlertList"; // Make sure this path is correct

const App = () => {
  return (
    <div className="App">
      <h1>Alert System</h1>
      <AlertList />
      <MapComponent />
    </div>
  );
};

export default App;
