import React, { useState, useMemo } from "react";

const SquareCalculator = () => {
  const [inputValue, setInputValue] = useState(5);
  const [multiplier, setMultiplier] = useState(1);

  /* The useMemo hook is used to memoize the result of a computation. 
  It's useful when you want to optimize performance by caching the result of 
  an expensive operation and only recomputing it 
  when certain dependencies change. 
  Examples: Graphs, Charts Rendering, 
  AG Grid -- Refer: https://www.ag-grid.com/react-data-grid/reactui/ 
  */
  const square = useMemo(() => {
    console.log("Calculating square...");
    return inputValue * inputValue;
  }, [inputValue]);

  return (
    <div>
      <p>Number: {inputValue}</p>
      <p>Square: {square}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(Number(event.target.value))}
      />
      <br />
      <br />

      <p>Multiplier: {multiplier}</p>
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(Number(e.target.value))}
      />
    </div>
  );
};

export default SquareCalculator;

/* the useMemo hook has both inputValue as dependency, 
so the square calculation will be recalculated whenever the inputValue changes. 
*/

/* The number state represents the input value.
The square variable is memoized using useMemo. 
The function provided to useMemo is the computation to be memoized, 
and the second argument is an array of dependencies. 
The memoized value is recalculated only when one of the dependencies changes.
When you input a number in the input field, 
the square is calculated and displayed. 
The console.log inside the memoized function helps you see when the c
alculation is happening.
*/