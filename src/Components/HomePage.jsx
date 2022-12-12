import React from 'react'
import {  Link } from 'react-router-dom'
import "./VehicleList.css";
import "./HomePage.css";

function HomePage() {
  return (
    <div className='home-container'>
      <Link to="/vehicles"><div className='home-button glow-border'>Vehicles</div></Link>

      <Link to="/starships"><div className='home-button glow-border'>Starships</div></Link>
    </div>
  )
}

export default HomePage