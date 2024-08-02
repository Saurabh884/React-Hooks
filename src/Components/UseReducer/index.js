import React, { useReducer } from 'react'

//Definition:The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
const reducer = (state, action) => {
    
    switch(action.type){
        case "INCREMENT" :
        return {count: state.count +1};

        case "DECREMENT" :
            return {count: state.count -1};

            case "RESET" :
            return {count: 0};
         
            default :
            return state ;
    }
}

const UseReducer = () => {
   const [state, dispatch] = useReducer(reducer , {count:0}) 
  return (
    <div>
        <p>Count:{state.count}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})} >Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})} > Decrement</button>
        <button onClick={()=>dispatch({type:"RESET"})} > Reset</button>
    </div>
  )
}

export default UseReducer;