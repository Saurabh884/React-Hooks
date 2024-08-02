import { useEffect, useState } from "react";


//Definition:Custom hooks are functions that we create to make logic accessible to other components or functions in an application. As with other hooks in React, a custom hook must: Be called at the very top level of your React function to ensure that hooks are called in the same order each time a component renders.
const UseFetchApp = (url) => {
  const [userData, setUserData] = useState([]);
  const [isError , setIsError] = useState(null);
  const [isLoading ,setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetch(url);
           if(!data.ok){
            throw new Error ("Failed to fetch data")
           }
            const res = await data.json();
           
            setUserData(res);
        } catch (error) {
            setIsError(error)
        }finally{
            setIsLoading(false)
        }
     
    };

    fetchData();
  }, [url]);

  return {userData, isError,isLoading}
};

export default UseFetchApp;
