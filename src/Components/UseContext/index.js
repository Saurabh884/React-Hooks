import React, { createContext } from "react";
import ComponentA from "./ComponentA";

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
