import React, { useContext } from 'react';
import { userInfo } from '.';

const ComponentB = () => {
    const data = useContext(userInfo);
    console.log(data);
  return (
    <div>
        {`${data.name} from ${data.city}`}
    </div>
  )
}

export default ComponentB