import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setage] = useState(0);
  const [salary, setsalary] = useState(10000);
  const ageIncrement = useCallback(() => {
    setage(age + 10);
  }, [age]);

  const salaryIncrement = useCallback(() => {
    setsalary(salary + 10000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={ageIncrement}>Increase Age </Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={salaryIncrement}>Increase Salary </Button>
    </div>
  );
}

export default ParentComponent;
