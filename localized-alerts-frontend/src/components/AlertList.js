// src/components/AlertList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/alerts"); // Update with your endpoint
        setAlerts(response.data); // Assuming the response contains the alerts
      } catch (err) {
        setError("Error fetching alerts");
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            <strong>{alert.title}</strong> at {alert.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
