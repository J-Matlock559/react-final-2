import React, {useContext} from 'react'
import { CartContext } from '../App'
import { deleteShip } from '../Utilities/cart-handlers'
import {  useNavigate } from 'react-router-dom'
import "./HangarCart.css"

function HangarCart() {
  const [cart, setCart, blackMarket, setBlackMarket] = useContext(CartContext);
  const navigate = useNavigate();
  let grandTotal = 0;
  
  return (
    <div className='cart-container'>
        
        <div className="cart-card">
          <div className='cart-item glow-border'><h1>Current Fleet</h1></div>
        {cart.map((ship) => {
          const price = parseInt(ship.cost_in_credits);
          const total = price * ship.qty;
          grandTotal = grandTotal + total;
          return(
            <div className="cart-item" key={ship.created}>
              <div className="glow-border cart-detail"><b>Ship:</b>&nbsp;&nbsp;<div>{ship.name}</div></div>
              <div className="glow-border cart-detail"><b>Model:</b>&nbsp;&nbsp;<div>{ship.model}</div></div>
              <div className="glow-border cart-detail"><b>Quantity:</b>&nbsp;{ship.qty}</div>
              <div className="glow-border cart-detail cart-price"><b>Total: </b><img className="credits-symbol" style={{scale: '.75'}}
                src={require(`../vehicle-images/credits.png`)}
              />{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>

              <div className="glow-border cart-detail clickable scale" onClick={() => {setCart(deleteShip(cart, ship))}}>Remove From Fleet</div>
            </div>
          )
        })}

        { cart.length === 0 ? 
          <div className='grand-total glow-border' style={{margin: '15px', width: 'auto'}}>There are no ships in this fleet.</div> 
          : 
          <div className='cart-item'>
            <div className="grand-total glow-border clickable scale" onClick={() => {setCart([])}}><b>Disband This Fleet</b></div>
            <div className="grand-total glow-border"><b>Total Cost of Fleet:</b>&nbsp; <img className="credits-symbol" style={{scale: '.9', position: 'relative', top: '-3px'}}
                src={require(`../vehicle-images/credits.png`)}
            />{grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
            <div className="grand-total glow-border clickable scale" onClick={() => {navigate('/dock')}}><b>Proceed To Purchasing Dock</b></div>
          </div>}
        </div>
      

      
        
        <div className="cart-card">
        <div className='cart-item glow-border'><h1>Black Market Fleet</h1></div>
        {blackMarket.map((ship) => {
          return(
            <div className="cart-item" key={ship.created}>
              <div className="glow-border cart-detail"><b>Ship:</b>&nbsp;&nbsp;<div>{ship.name}</div></div>
              <div className="glow-border cart-detail"><b>Model:</b>&nbsp;&nbsp;<div>{ship.model}</div></div>
              <div className="glow-border cart-detail"><b>Quantity:</b>&nbsp;{ship.qty}</div>
              <div className="glow-border cart-detail">See Dok-Ondar</div>
              <div className="glow-border cart-detail clickable scale" onClick={() => {setBlackMarket(deleteShip(blackMarket, ship))}}>Remove From Fleet</div>
            </div>
          )
        })}
        { blackMarket.length === 0 ? <div className='grand-total glow-border' style={{margin: '15px', width: 'auto'}}>There are no ships in this fleet.</div> : 
        <div className='cart-item'>
          <div className="grand-total glow-border clickable scale" onClick={() => {setBlackMarket([])}}><b>Disband This Fleet</b></div>
          <div className='grand-total glow-border' style={{fontSize: '1.3rem'}}>Contact Dok-Ondar to purchase this fleet.</div> 
          <div className="grand-total glow-border clickable scale" onClick={() => {navigate('/dock')}}><b>Proceed To Purchasing Dock</b></div>
        </div>
          }
        </div>
      
    </div>
  )
}

export default HangarCart