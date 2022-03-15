import React from 'react'

function Park({park}) {

  return (
    <div>
      <h1>{park.name}</h1>
      <h3>{(park.street)}</h3>
      <h3>{park.city}</h3>
    </div>
  )
}

export default Park