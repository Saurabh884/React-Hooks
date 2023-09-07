import React, { useEffect, useState } from "react";

const HookCounterFive = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("calling Hookcounter five");
  }, []);

  //useEffect runs after every render
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default HookCounterFive;
