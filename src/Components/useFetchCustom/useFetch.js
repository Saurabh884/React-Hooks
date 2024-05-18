import React from 'react'
import UseFetchApp from '.';
import "./index.css"


const UseFetch = () => {
    const{ userData, isError, isLoading} = UseFetchApp("https://jsonplaceholder.typicode.com/posts");
    console.log("data",userData);

    if (isLoading){
        return <div>Loading.....</div>
    }


    if (isError){
        return <div>Errorloading data</div>
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
              { userData.length>0 && userData.map((user)=> <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default UseFetch;