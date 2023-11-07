import { useEffect, useState } from "react";
import "./App.css";
import DyCircle from "./components/dycircle/DyCircle";

function App() {
  function toPerct(val, from, to) {
    return (val * to) / from;
  }
  const [seconde, setSeconde] = useState(new Date().getSeconds());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  const [radiusSeconde, setRadiusSeconde] = useState(toPerct(seconde, 60, 360));
  const [radiusMinutes, setRadiusMinutes] = useState(toPerct(minute, 60, 360));
  const [radiusHour, setRadiusHour] = useState(toPerct(hour, 24, 360));

  useEffect(() => {
    const interval = setInterval(() => {
      setRadiusMinutes(toPerct(new Date().getMinutes(), 60, 360));
      setRadiusSeconde(toPerct(new Date().getSeconds(), 60, 360));
      setRadiusHour(toPerct(new Date().getHours(), 24, 360));

      setSeconde(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "200px",
      }}
    >
      <DyCircle radius={radiusHour}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {hour} <div>Hour</div>
        </div>
      </DyCircle>
      <DyCircle radius={radiusMinutes}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {minute} <div>minute</div>
        </div>
      </DyCircle>
      <DyCircle radius={radiusSeconde}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {seconde} <div>seconde</div>
        </div>
      </DyCircle>
    </div>
  );
}

export default App;
