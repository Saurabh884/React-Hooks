import React from 'react'

const Counter = ({text,count}) => {
    console.log(`Rendering ${text}`)
  return (
    <div>
        <p>{text}:{count}</p>

    </div>
  )
}

export default React.memo(Counter);