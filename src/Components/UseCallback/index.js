import React, { useCallback, useState } from "react";
import Counter from "./Counter";
import Button from "./Button";
import Title from "./Title";

const UseCallback = () => {
    const [counter, setcounter] = useState(0);
    const [salary, setSalary] = useState(0);
  
    const incrementOne = useCallback(() => {
      setcounter((counter) => counter + 1);
    },[]);
  
    const incrementSalary = useCallback(() => {
      setSalary(salary => salary + 1000);
    },[]);
  return (
    <div>
        <Title />
      <Counter text="Increment Counter" count={counter} />
      <Button handleButtonClick={incrementOne}>Increment Counter</Button>
      <Counter text="Increment Salary" count={salary} />
      <Button handleButtonClick={incrementSalary}> Increment Salary </Button>
    </div>
  )
}

export default UseCallback;