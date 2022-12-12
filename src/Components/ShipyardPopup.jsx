import React from 'react'
import {  Link } from 'react-router-dom'

function ShipyardPopup({showPopup}) {
  if (showPopup === false){
    return null;
  }

  return (
    <div className='shipyard-container glow-border'>
      <Link to='/vehicles'>
        <div className='glow-border shipyard-button flexcenter'>Vehicles</div>
      </Link>
      <Link to='/starships'>
        <div className='glow-border shipyard-button flexcenter'>Starships</div>
      </Link>
    </div>
  )
}

export default ShipyardPopup