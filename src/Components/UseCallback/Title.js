import React from 'react'

const Title = () => {
    console.log("Rendering title")
  return (
    <div>UseCallback Hook</div>
  )
}

export default React.memo(Title);