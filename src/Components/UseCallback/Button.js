import React from 'react'

const Button = ({handleButtonClick,children}) => {
    console.log(`Rendering ${children} `)
  return (
    <button onClick={handleButtonClick} >{children}</button>
  )
}

export default React.memo(Button);