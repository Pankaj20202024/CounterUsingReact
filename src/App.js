import React from "react";
import { useState } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);
  const [backgroundcolor, setbackgrouncolor] = useState("green");
  const [disabledIncrement, setdisabledIncrement] = useState(false);
  const [disabledDecrement, setdisabledDecrement] = useState(true);
  const IncrementValue = () => {
    setcounter(counter + 1);
    setdisabledDecrement(false);
    if (counter + 1 >= 0 && counter + 1 <= 4) {
      setbackgrouncolor("green");
    } else if (counter + 1 >= 5 && counter + 1 <= 9) {
      setbackgrouncolor("blue");
    } else {
      setbackgrouncolor("red");
      setdisabledIncrement(true);
    }
  };

  const DecrementValue = () => {
    if (counter - 1 === 0) {
      setdisabledDecrement(true);
    }
    setcounter(counter - 1);
    setdisabledIncrement(false);
    if (counter - 1 >= 0 && counter - 1 <= 4) {
      setbackgrouncolor("green");
    } else if (counter - 1 >= 5 && counter - 1 <= 9) {
      setbackgrouncolor("blue");
    } else {
      setbackgrouncolor("red");
    }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: backgroundcolor }}>{counter}</h1>
      <button
        onClick={IncrementValue}
        disabled={disabledIncrement}
        style={{ margin: "3px", cursor: "pointer" }}
      >
        Increment
      </button>
      <button
        onClick={DecrementValue}
        disabled={disabledDecrement}
        style={{ margin: "3px", cursor: "pointer" }}
      >
        Decrement
      </button>
    </div>
  );
}
