import React from "react";
import "./App.css";
import Timer from "../src/Components/Stopwatch";
import StopWatch from "./Components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <div>
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
