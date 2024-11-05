import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define custom icons for each severity level
const getIcon = (severity) => {
  let color;
  switch (severity) {
    case "low":
      color = "green";
      break;
    case "medium":
      color = "orange";
      break;
    case "high":
      color = "red";
      break;
    default:
      color = "blue";
  }
  return L.divIcon({
    className: "custom-marker",
    html: `<span style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; display: inline-block;"></span>`,
  });
};

const MapComponent = ({ alerts }) => {
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {alerts.map((alert) => (
        <Marker
          key={alert.id}
          position={[alert.location.lat, alert.location.lng]}
          icon={getIcon(alert.severity)}
        >
          <Popup>
            <b>{alert.name}</b> <br />
            Severity: {alert.severity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
