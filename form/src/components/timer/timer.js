import { useEffect, useLayoutEffect, useRef, useState } from "react";
import DyCircle from "../dycircle/DyCircle";

function Timer(props) {
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

  const ref = useRef(null);

  const [width, setWidth] = useState(props.width / 3 || 50);
  const [height, setHeight] = useState(props.width / 3 || 50);

  useEffect(() => {
    setWidth(props.width / 3 || 50);
    setHeight(props.width / 3 || 50);
  }, [props.width]);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "start",
      }}
    >
      <DyCircle
        radius={radiusHour}
        width={width}
        height={height}
        text="hour"
        value={hour}
      ></DyCircle>
      <DyCircle
        radius={radiusMinutes}
        width={width}
        height={height}
        text="minutes"
        value={minute}
      ></DyCircle>
      <DyCircle
        radius={radiusSeconde}
        width={width}
        height={height}
        text="secondes"
        value={seconde}
      ></DyCircle>
    </div>
  );
}

export default Timer;
