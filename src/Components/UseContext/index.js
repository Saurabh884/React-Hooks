import React, { createContext } from "react";
import ComponentA from "./ComponentA";


//Definition: The useContext hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level.
const userData = {
  name: "Saurabh",
  city: "Bangalore",
};

export const userInfo = createContext();

const UseContext = () => {
  return (
    <div>
      <userInfo.Provider value={userData}>
        <ComponentA />
      </userInfo.Provider>
    </div>
  );
};

export default UseContext;
