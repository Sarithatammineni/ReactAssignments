import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]); // ✅ array

  const handleCalculate = () => {
    if (num1 === "" || num2 === "") return;

    const a = Number(num1);
    const b = Number(num2);
    let calcResult;

    if (operation === "add") calcResult = a + b;
    else if (operation === "subtract") calcResult = a - b;
    else if (operation === "multiply") calcResult = a * b;

    // ✅ append result
    setResults([...results, calcResult]);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={handleCalculate}>Calculate</button>

      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
