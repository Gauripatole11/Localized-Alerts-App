import React, { useState, useEffect } from "react";
import axios from "axios";

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/alerts");
        setAlerts(response.data);
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
