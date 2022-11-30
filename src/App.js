import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState({});
  let ageCalc = {};
  const getAge = (e) => {
    //years
    let userAge = e.target.value;
    let date = new Date(userAge);
    let currentDateMs = Date.now();
    let DOBMs = date.getTime();
    let calculatedMs = currentDateMs - DOBMs;
    let calculatedMsDate = new Date(calculatedMs);
    let UTCYear = calculatedMsDate.getUTCFullYear();
    ageCalc.years = Math.abs(UTCYear - 1970) + " years";

    //days
    let currentDate = new Date();
    ageCalc.days =
      Math.round((currentDate - date) / (1000 * 60 * 60 * 24) - 1) + " days";
  };
  const ageResult = () => {
    // ageCalc
    setResult(ageCalc);
    console.log(result);
  };
  return (
    <div className="App">
      <input type="date" onChange={getAge} />
      <button onClick={ageResult}>click</button>
      <br />
      {result.years}
      <br />
      {result.days}
    </div>
  );
}
