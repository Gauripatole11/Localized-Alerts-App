import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
//import { database } from "../firebaseConfig";

const AlertsComponent = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const alertsRef = ref(database, "alerts");
    onValue(
      alertsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setAlerts(Object.values(data));
        } else {
          setAlerts([]); // Reset to empty if no data found
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }, []);

  return (
    <div>
      <h1>Real-Time Alerts</h1>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            {alert.name} - {alert.severity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsComponent;
