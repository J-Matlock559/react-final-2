import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "./VehicleList.css";
import "./HomePage.css";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className='home-container'>
        <div className="dok-ondar"></div>
        <div className='home-button  clickable' onClick={() => {navigate('/vehicles')}}>
          <div className="black glow-border">Vehicles</div>
          <div className="img img1 hover-1 glow-border"></div>
          <div className="img img2 hover-2 glow-border"></div>
          <div className="img img3 hover-3 glow-border"></div>
        </div>


      <div className='home-button clickable' onClick={() => {navigate('/starships')}}>
        <div className="black glow-border">Starships</div>
        <div className="img img4 hover-1 glow-border"></div>
        <div className="img img5 hover-2 glow-border"></div>
        <div className="img img6 hover-3 glow-border"></div>
      </div>
    </div>
  )
}

export default HomePage