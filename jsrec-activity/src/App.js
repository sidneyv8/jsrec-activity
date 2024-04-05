import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [emotion, serEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>Welllcome {emotion}</h1>
      <button onClick={() => serEmotion("sad")}>sad</button>
    </div>
  );
}

export default App;
  