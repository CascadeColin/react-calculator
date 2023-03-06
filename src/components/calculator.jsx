import React, { useState } from "react";
import "./calculator.css";
import { maths } from "../helpers/maths.js";

export default function Calculator() {
  const [output, setOutput] = useState([]);
  const [error, setError] = useState("");
  
  // math operators: ÷, *, +, -
  const operations = /[÷*+-=]/g;

  // reset all state if AC is clicked
  function handleClear() {
    setOutput([]);
    setError("");
  }
  // if numbers are pressed, add them to the array so they can be diplayed
  function handleOperand(value) {
    setOutput((arr) => [...arr, value]);
    // reset error state if it exists
    setError("");
  }

  function handleOperators(value) {
    if (output.length === 0 && operations.test(value)) {
      setOutput([]);
      setError("Enter an operand first!");
    } else {
      setOutput((arr) => [...arr, value]);
      setError("");
    }
  }

  // join the array into a single number
  function renderOutput(arr) {
    if (arr.length) {
      return arr.join("");
    } else {
      return 0;
    }
  }

  return (
    <div className="container">
      <h1 className="output">{renderOutput(output)}</h1>
      <button type="button" className="ac" onClick={() => handleClear()}>
        AC
      </button>
      <button type="button" className="del">
        DEL
      </button>
      <button
        type="button"
        className="divide"
        onClick={(e) => handleOperators(e.currentTarget.textContent)}
      >
        ÷
      </button>
      <button
        type="button"
        className="one"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        1
      </button>
      <button
        type="button"
        className="two"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        2
      </button>
      <button
        type="button"
        className="three"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        3
      </button>
      <button
        type="button"
        className="multiple"
        onClick={(e) => handleOperators(e.currentTarget.textContent)}
      >
        *
      </button>
      <button
        type="button"
        className="four"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        4
      </button>
      <button
        type="button"
        className="five"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        5
      </button>
      <button
        type="button"
        className="six"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        6
      </button>
      <button
        type="button"
        className="plus"
        onClick={(e) => handleOperators(e.currentTarget.textContent)}
      >
        +
      </button>
      <button
        type="button"
        className="seven"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        7
      </button>
      <button
        type="button"
        className="eight"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        8
      </button>
      <button
        type="button"
        className="nine"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        9
      </button>
      <button
        type="button"
        className="minus"
        onClick={(e) => handleOperators(e.currentTarget.textContent)}
      >
        -
      </button>
      <button
        type="button"
        className="point"
        // TODO: add logic for handling '.'
      >
        .
      </button>
      <button
        type="button"
        className="zero"
        onClick={(e) => handleOperand(e.currentTarget.textContent)}
      >
        0
      </button>
      <button
        type="button"
        className="equal"
        onClick={(e) => handleOperators(e.currentTarget.textContent)}
      >
        =
      </button>
      {error && <p className="errormsg">{error}</p>}
    </div>
  );
}
