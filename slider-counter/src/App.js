import "./styles.css";
import { useState } from "react";

function Counter() {
  const [setstate, newstate] = useState(0);
  const [setstep, newstep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + setstate);
  return (
    <div>
      <div>
        <input
          type="range"
          min="-100"
          max="100"
          value={setstep}
          onChange={(e) => newstep(Number(e.target.value))}
          class="slider"
          id="myRange"
        ></input>
        <span>{setstep}</span>
      </div>
      <button onClick={() => newstate((c) => c + 1 * setstep)}>+</button>
      <input
        type="number"
        value={Math.abs(setstate)}
        onChange={(e) => newstate(Number(e.target.value))}
      ></input>
      <button onClick={() => newstate((c) => c - 1 * setstep)}>-</button>

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
      <div>
        <button onClick={() => newstate(0)}>RESET</button>
      </div>
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
