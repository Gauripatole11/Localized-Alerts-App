import React from "react";
import "./App.css";
import MapComponent from "./MapComponent";
import AlertList from "./components/AlertList";
import AlertsComponent from "./components/AlertsComponent";

const alertData = [
  {
    id: 1,
    name: "Minor Alert",
    severity: "low",
    location: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 2,
    name: "Moderate Alert",
    severity: "medium",
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: "Severe Alert",
    severity: "high",
    location: { lat: 40.7128, lng: -74.006 },
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Alert System</h1>
      <AlertList />
      <AlertsComponent />
      <MapComponent alerts={alertData} /> {/* Pass alertData as alerts prop */}
    </div>
  );
};

export default App;
