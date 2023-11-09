import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/timer/timer";
const _ = require("lodash");
function App() {
  const WIDTH = 268;
  const [survey, setSurvey] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [w, setW] = useState(WIDTH);

  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const response = await fetch("http://localhost:8000/survey");
      const data = await response.json();
      setSurvey(_.get(data, "surveyData"));
      setLoading(false);
    }

    fetchdata();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <input
        value={w}
        style={{ width: "100px" }}
        type="number"
        onChange={(e) => setW(e.target.value)}
      ></input>
      <Timer width={w || WIDTH}></Timer>
      {isLoading === true ? (
        <div>Loading</div>
      ) : (
        <ul>
          {_.map(Object.keys(survey), (s, i) => {
            return <li key={`${i}`}>{survey[s]}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default App;
