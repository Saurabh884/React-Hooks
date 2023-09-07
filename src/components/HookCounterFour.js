import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([]);
    const addItem = () =>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() *10) +1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add Number</button>
      <ul>
        {
           items.map((item,index)=>{
            return <li key={item.id}>
                     <h2>{item.value}</h2>
            </li>
           })
        }
      </ul>
    </div>
  )
}

export default HookCounterFour
