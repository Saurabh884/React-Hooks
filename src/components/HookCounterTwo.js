import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount =0;
    const [count, setCount] = useState(initialCount);
    const incrementByFive = () =>{
        for (let i=0; i<5; i++)
        setCount(count =>count+1)
    }
  return (
    <div>
      Count: {count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(count+1)} >Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={incrementByFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
