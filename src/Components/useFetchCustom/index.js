import { useEffect, useState } from "react";

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
