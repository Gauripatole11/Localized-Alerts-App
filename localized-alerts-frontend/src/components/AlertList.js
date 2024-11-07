import React, { useState, useEffect } from "react";
import axios from "axios";

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("/api/alerts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAlerts(response.data); // Assuming the backend sends an array of alerts
      } catch (err) {
        console.error(err);
        setError("Failed to load alerts. Please make sure you're logged in.");
      }
    };

    fetchAlerts();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Alerts</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              <strong>{alert.title}</strong> at {alert.location}
            </li>
          ))}
        </ul>
      ) : (
        <p>No alerts available</p>
      )}
    </div>
  );
};

export default AlertList;
