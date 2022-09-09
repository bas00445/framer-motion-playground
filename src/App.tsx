import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <span className="text-gray-900 text-xl font-bold underline">
        Framer Motion Playground
      </span>
    </div>
  );
}

export default App;
