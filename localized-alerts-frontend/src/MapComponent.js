import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAddAlert = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
    setAlertMessage(`Alert set for location: ${e.latlng.lat}, ${e.latlng.lng}`);
  };

  return (
    <div>
      <h2>Location-Based Alert System</h2>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        onclick={handleAddAlert}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{alertMessage || "Click on the map to set an alert."}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
