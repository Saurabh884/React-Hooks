import React, { memo, useState } from "react";

function ChildUseCallback() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={() => setcount(count + 1)}>Update Count</button>
    </div>
  );
}

export default ChildUseCallback;
