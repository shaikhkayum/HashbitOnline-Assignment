import { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [res, setRes] = useState("");

  const add = () => setRes(Number(a) + Number(b));
  const sub = () => setRes(Number(a) - Number(b));
  const mul = () => setRes(Number(a) * Number(b));
  const div = () => {
    if (Number(b) === 0) setRes("Cannot divide by zero");
    else setRes(Number(a) / Number(b));
  };

  return (
    <div className="calc">
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <div className="btns">
  <button onClick={add}>+</button>
  <button onClick={sub}>−</button>
  <button onClick={mul}>×</button>
  <button onClick={div}>÷</button>
</div>


      <div className="result">
        Result: {res}
      </div>
    </div>
  );
}

export default App;
