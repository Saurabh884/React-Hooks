import React, { useEffect, useRef } from 'react'


//Definition:The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef hook is a new addition in React 16.8. To learn useRef the user should be aware about refs in React. Unlike useState if we change a value in useRef it will not re-render the webpage.
const UseRef = () => {
    const inputRef = useRef(null);
    useEffect(()=>{
       inputRef.current.focus();
    },[])
  return (
    <div>
        <input ref={inputRef} />
    </div>
  )
}

export default UseRef;