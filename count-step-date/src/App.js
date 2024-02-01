import "./styles.css";
import { useState } from "react";

function Counter() {
  const [setstate, newstate] = useState(0);
  const [setstep, newstep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + setstate);
  return (
    <div>
      <p>count : {setstate}</p>
      <button onClick={() => newstate((c) => c + 1 * setstep)}>+</button>
      <button onClick={() => newstate((c) => c - 1 * setstep)}>-</button>
      <p>step : {setstep}</p>
      <button onClick={() => newstep((c) => c + 1)}>+</button>
      <button onClick={() => newstep((c) => c - 1)}>-</button>
      <p>
        <span>
          {setstate === 0
            ? "today "
            : setstate > 0
            ? `${setstate} days from today is`
            : `${Math.abs(setstate)} days ago was`}
        </span>
      </p>
      <span> {date.toDateString()}</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
