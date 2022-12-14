import React, {useContext, useState } from 'react'
import { CartContext } from '../App';
import { updateCart } from '../Utilities/cart-handlers';
import "./VehicleDetails.css"

function VehicleDetails({isLoading}) {

  
  
  const [qty, setQty] = useState(1);
  const [cart, setCart, blackMarket, setBlackMarket] = useContext(CartContext);
  
  if (isLoading === true) {return null};
  const ship = JSON.parse(localStorage.getItem('Ship'));
  
  
  const shipName = ship.name.replace(/\//g, "");
  ship.name = ship.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  ship.model = ship.model.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  const speed = parseInt(ship.max_atmosphering_speed);

  const shipType = ship.url.includes("starships");
  let symbol = "0px";
  let price = ship.cost_in_credits;

  if (price != "unknown") {
    price = parseInt(price).toLocaleString(undefined, { minimumFractionDigits: 2 });
    symbol = "1.2rem";
  } else {
    price = "Contact Dok-Ondar";
  }

  return (
    <div className='flexcenter details-background'>
      <div className='details-card'>
        <div className='details-row-1'>
          <div className='details-image glow-border'>
            <img
            src={require(`../vehicle-images/${shipName}.jpg`)}
            />
          </div>
          <div className='details-details glow-border'>
            {shipType ? 
            <>
              <p><b>Model:</b> {ship.model}</p>
              <p><b>Manufacturer:</b> {ship.manufacturer}</p>
              <p><b>Starship Class:</b> {ship.starship_class.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</p>
              <p><b>Vehicle Length:</b> {ship.length}m</p>
              <p><b>Crew Size:</b> {ship.crew}</p>
              <p><b>Passenger Capacity:</b> {ship.passengers}</p>
              <p><b>Cargo Capacity:</b> {parseInt(ship.cargo_capacity).toLocaleString()}m<sup>3</sup></p>
              <p><b>Maximum Atmosphere Speed:</b> {speed.toLocaleString()} km/h</p>
              <p><b>Megalight Speed:</b> {ship.MGLT}MGLT</p>
              <p><b>Hyperdrive Rating:</b> {ship.hyperdrive_rating}</p>
            </> : <>
              <p><b>Model:</b> {ship.model}</p>
              <p><b>Manufacturer:</b> {ship.manufacturer}</p>
              <p><b>Vehicle Class:</b> {ship.vehicle_class.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</p>
              <p><b>Vehicle Length:</b> {ship.length.toLocaleString()}m</p>
              <p><b>Crew Size:</b> {ship.crew}</p>
              <p><b>Passenger Capacity:</b> {ship.passengers}</p>
              <p><b>Cargo Capacity:</b> {parseInt(ship.cargo_capacity).toLocaleString()}m<sup>3</sup></p>
              <p><b>Maximum Atmosphere Speed:</b> {speed.toLocaleString()} km/h</p>
            </>}
          </div>
          
        </div>

        <div className="details-row-2">
          <div className="row-2-col-1">
            <div className='glow-border details-name'><b>{ship.name}</b></div>
          </div>
        
          <div className="row-2-col-2">
            <div className="details-buy glow-border"><b>Price:</b> &nbsp; &nbsp; <img className="credits-symbol" style={{width:`${symbol}`}}
            src={require(`../vehicle-images/credits.png`)}
            />{price}</div>

            <div className="quantity glow-border clickable disable-select">
              <div className='plus-minus' onClick={() => {setQty(qty + 1)}}>+</div>
              <div className='plus-minus' onClick={() => {
                let tempQty = qty;
                {qty > 1 ? tempQty = tempQty - 1 : tempQty = 1}
                setQty(tempQty);
                }}>-</div>
            </div>

            { price === "Contact Dok-Ondar" ? 

            <div className="details-buy glow-border clickable disable-select" onClick={() => { setBlackMarket(updateCart(blackMarket, ship, qty)) }}><b>Add {qty} to Black Market Fleet</b></div> 
            
            :

            <div className="details-buy glow-border clickable disable-select" onClick={() => { setCart(updateCart(cart, ship, qty)) }}><b>Add {qty} to Fleet</b></div>}

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default VehicleDetails