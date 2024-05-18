import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setcounterOne(counterOne=>counterOne+1)
    };
    const incrementTwo = () => {
        setCounterTwo(counterTwo=>counterTwo+2)
    };

    const isEven = useMemo(() => {
        let i =0;
        while(i<2000000000) i++;
        return counterOne % 2 ===0;
    },[counterOne]) 

  return (
    <div>
        
       <div>
          <button onClick={incrementOne} >Increment one - {counterOne}</button>
          <span>{isEven ?"Even":"Odd"}</span>
       </div>

       <div>
          <button onClick={incrementTwo} >Increment two - {counterTwo}</button>
       </div>

    </div>
  )
}

export default UseMemo;