import { useCallback, useState } from "react";

/* 
The useCallback hook in React is used to return a memoized callback function. 
It caches the callback function between re-renders.
it returns a memoized version of the callback function that only 
changes if one of the dependencies has changed. 
This can be useful for performance optimization, 
especially when passing callbacks to child components that rely on reference equality.
*/

const Counter = () => {
  const [count, setCount] = useState(0);

  // Without useCallback -- Child comp will re-render even when just count value changed.
  const handleClick = () => {
    console.log('Calling the fn defined in Parent Comp. Button Clicked');
  };

  // With useCallback
  // const handleClick = useCallback(() => {
  //   console.log("Button Clicked! Count:", count);
  // }, [count]);

  /* In this example, the handleClick function is wrapped with useCallback. 
  The dependency array [count] specifies that the memoized callback should 
  only be recreated if the count state changes.
  This can be beneficial in scenarios where the callback is passed 
  as a prop to child components, preventing unnecessary re-renders 
  of those components when the callback reference remains the same.
  */

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent: React.FC<{onClick: () => void}> = ({ onClick }) => {
  console.log("ChildComponent Rendered");

  return (
    <div>
      <p>Child Component</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Counter;