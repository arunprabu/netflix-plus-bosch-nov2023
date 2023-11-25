import { useCallback, useState } from "react";

/* 
The useCallback hook in React is used to return a memoized callback function. 
It caches the callback function between re-renders.
it returns a memoized version of the callback function that only 
changes if one of the dependencies has changed. 
This can be useful for performance optimization, 
especially when passing callbacks to child components that rely on reference equality.
*/

const NewsMedia = () => {
  const [newsFeedCount, setNewsFeedCount] = useState(62);
  const [writersCount, setWritersCount] = useState(4);

  // Without useCallback -- Child comp will re-render even when just count value changed.
  // Everytime the following fn is recreated and supplied to child comp for re-rendering
  // const handleClick = () => {
  //   console.log(
  //     "News Feed Count:",
  //     newsFeedCount,
  //     "Writers Count:",
  //     writersCount
  //   );
  // };

  // With useCallback
  // In this example, the following fn Will NOT be 
  // recreated and supplied to child comp for re-rendering
  // But, only when newsFeedCount changes the handleClick is recreated and 
  // supplied to child comp
  const handleClick = useCallback(() => {
    console.log(
      "News Feed Count:",
      newsFeedCount,
      "& Writers Count:",
      writersCount
    );
  }, [newsFeedCount]);

  /* The handleClick function is defined using useCallback. 
  It logs the counts of both newsFeedCount and writersCount
  when the button in the ChildComponent is clicked. 
  The dependency array [newsFeedCount] ensures that the callback is 
  RECREATED only when newsFeedCount. NOT when writersCount changes.
  */

  return (
    <div className="row">
      <div className="col-md-3 offset-md-3">
        <p>News Feed Count: {newsFeedCount}</p>
        <button onClick={() => setNewsFeedCount(newsFeedCount + 1)}>
          Publish New Feed
        </button>
      </div>

      <div className="col-md-4">
        <p>Writers Count: {writersCount}</p>
        <button onClick={() => setWritersCount(writersCount + 1)}>
          Add a New Writer
        </button>
      </div>

      <div className="mt-3 text-center">
        <LatestUpdates onClick={handleClick} />
      </div>
    </div>
  );
};

const LatestUpdates: React.FC<{onClick: () => void}> = ({ onClick }) => {
  console.log("ChildComponent Rendered");

  return (
    <div>
      <p>LatestUpdates in Child Component</p>
      <button onClick={onClick}>Fetch News Feed</button>
    </div>
  );
};

export default NewsMedia;

/* How to check the above example?
1. First see the log on load
  Log: ChildComponent Rendered
2. Click 'Publish New Feed' button 
  Log: ChildComponent Rendered
3. Click 'Fetch News Feed' Button
  Log: News Feed Count: 63 & Writers Count: 4
4. Click 'Add New Writers' - 5 times 
  Log: (5 times) ChildComponent Rendered
5. Click 'Fetch News Feed' Button
  Log: News Feed Count: 63 Writers & Count: 4   (Notice writers count remains 4)

Meaning, the handleClick function is memoized and supplied to the child component.
Only when newsFeedCount changes the handleClick is recreated and 
supplied to child comp.
*/

